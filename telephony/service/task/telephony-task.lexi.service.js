angular.module("ovh-api-services").service("TelephonyServiceTaskLexi", function ($resource, Poller) {
    "use strict";

    var loadRemoteRoute = "/telephony/:billingAccount/service/:serviceName/task/:taskId";

    var taskResource = $resource(loadRemoteRoute, {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        taskId: "@taskId"
    }, {
        get: {
            url: loadRemoteRoute,
            method: "GET",
            isArray: false
        },
        query: {
            url: "/telephony/:billingAccount/service/:serviceName/task",
            method: "GET",
            isArray: true
        }
    }
    );

    taskResource.poll = function ($scope, opts) {
        var url = loadRemoteRoute.replace(/\/:(\w*)/g, function (match, replacement) {
            return "/" + opts[replacement];
        });

        $scope.$on("$destroy", function () {
            Poller.kill({
                scope: $scope.$id
            });
        });

        return Poller.poll(
            url,
            {
                cache: false
            },
            {
                successRule: {
                    status: "ok"
                },
                errorRule: {
                    status: "error"
                },
                scope: $scope.$id,
                interval: 1000
            }
        );
    };

    return taskResource;

});
