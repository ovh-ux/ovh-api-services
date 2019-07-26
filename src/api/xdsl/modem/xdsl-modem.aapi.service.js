angular.module("ovh-api-services").service("OvhApiXdslModemAapi", function ($resource, Poller, OvhApiXdslModem) {
    "use strict";

    var modem = $resource("/xdsl/:xdslId/modem", {
        xdslId: "@xdslId"
    }, {
        get: {
            method: "GET",
            cache: OvhApiXdslModem.cache
        },
        query: {
            method: "GET",
            cache: OvhApiXdslModem.cache,
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
