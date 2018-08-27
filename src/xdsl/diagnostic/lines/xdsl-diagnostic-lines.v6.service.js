angular.module("ovh-api-services").service("OvhApiXdslDiagnosticLinesV6", function ($resource, Poller, OvhApiXdslDiagnosticLines) {
    "use strict";

    var routes = {
        base: "/xdsl/:serviceName/lines/:number/diagnostic",
        cancel: "/xdsl/:serviceName/lines/:number/diagnostic/cancel",
        run: "/xdsl/:serviceName/lines/:number/diagnostic/run"
    };

    var interceptor = function (response) {
        OvhApiXdslDiagnosticLines.resetCache();
        return response;
    };

    var diagnostic = $resource(routes.base, {
        serviceName: "@serviceName",
        number: "@number"
    }, {
        cancelDiagnostic: {
            url: routes.cancel,
            method: "POST",
            isArray: false,
            interceptor: interceptor
        }
    });

    diagnostic.runDiagnostic = function (opts) {
        // Replacement of each :myRouteParam by the corresponding json property
        // (Example: :serviceName by opts.serviceName)
        var url = routes.run.replace(/\/:(\w*)\//g, function (match, replacement) {
            return "/" + opts[replacement] + "/";
        });

        return Poller.poll(
            url,
            {
                cache: false
            },
            {
                method: "post",
                postData: _.omit(opts, ["serviceName", "number"]),
                interval: 30000,
                successRule: function (response) {
                    if (response.status !== "problem") {
                        return true;
                    }

                    return _.isEqual(_.get(response, "data.error", ""), "monitoringTodoAlreadyExists");
                },
                errorRule: function (response) {
                    return _.isEqual(response.status, "problem") &&
                           !_.isEqual(_.get(response, "data.error", ""), "monitoringTodoAlreadyExists");
                },
                namespace: "xdsl_diagnostic_run"
            }
        );
    };

    diagnostic.killPollerDiagnostic = function () {
        return Poller.kill({
            namespace: "xdsl_diagnostic_run"
        });
    };

    return diagnostic;
});
