angular.module("ovh-api-services").service("OvhApiTaskLexi", function ($resource, Poller) {
    "use strict";

    var loadRemoteRoute = "/sms/:serviceName/task/:taskId";

    var task = $resource(loadRemoteRoute, {
        serviceName: "@serviceName",
        taskId: "@taskId"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        }
    });

    task.poll = function ($scope, opts) {
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
                interval: 7000
            }
        );
    };

    return task;
});
