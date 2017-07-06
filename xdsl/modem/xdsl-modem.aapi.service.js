angular.module("ovh-api-services").service("XdslModemAapi", function ($resource, Poller, XdslModem) {
    "use strict";

    var modem = $resource("/xdsl/:xdslId/modem", {
        xdslId: "@xdslId"
    }, {
        get: {
            method: "GET",
            cache: XdslModem.cache
        },
        query: {
            method: "GET",
            cache: XdslModem.cache,
            isArray: true
        }
    });

    modem.poll = function ($scope, opts) {
        var url = ["/xdsl/", opts.xdslId, "/modem/tasks"].join("");

        if ($scope) {
            $scope.$on("$destroy", function () {
                Poller.kill({
                    scope: $scope.$id
                });
            });
        }

        return Poller.poll(
            url, {
                serviceType: "aapi"
            }, {
                successRule: {
                    status: "ok"
                },
                errorRule: {
                    status: "error"
                },
                namespace: opts.namespace
            }
        );
    };

    return modem;
}
);
