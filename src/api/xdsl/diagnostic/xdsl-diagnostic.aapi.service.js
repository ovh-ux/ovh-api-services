angular.module("ovh-api-services").service("OvhApiXdslDiagnosticAapi", function ($resource, Poller) {
    "use strict";

    var route = "/xdsl/:xdslId/diagnostic";

    var diagnostic = $resource(route, {
        xdslId: "@xdslId"
    });

    diagnostic.poll = function ($scope, opts) {
        var url = route.replace(/\/:(\w*)\//g, function (match, replacement) {
            return "/" + opts[replacement] + "/";
        });

        $scope.$on("$destroy", function () {
            Poller.kill({
                scope: $scope.$id
            });
        });

        return Poller.poll(
            url,
            {
                serviceType: "aapi"
            },
            {
                successRule: {
                    status: "ok"
                },
                errorRule: {
                    status: "error"
                },
                scope: $scope.$id,
                lastResult: 404
            }
        );
    };

    return diagnostic;
});
