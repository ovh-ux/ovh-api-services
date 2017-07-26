angular.module("ovh-api-services").service("OverTheBoxAapi", function ($resource, Poller, OverTheBox) {
    "use strict";

    var loadRemoteRoute = "/overTheBox/:serviceName/remoteAccesses";
    var interceptor = {
        response: function (response) {
            OverTheBox.resetCache();
            return response.resource;
        }
    };

    var overTheBox = $resource("/overTheBox/:serviceName", {
        serviceName: "@serviceName"
    }, {
        remoteAccesses: {
            method: "GET",
            url: loadRemoteRoute,
            serviceType: "aapi",
            isArray: true,
            cache: OverTheBox.cache
        },
        createAndAuthorize: {
            method: "POST",
            url: "/overTheBox/:serviceName/remoteAccess/create",
            serviceType: "aapi",
            isArray: false,
            interceptor: interceptor
        },
        getServices: {
            method: "GET",
            url: "/overTheBox/devices",
            serviceType: "aapi",
            isArray: true

            // no cache because if the user reset its box, the response must change
        }
    });

    overTheBox.poll = function ($scope, opts) {
        var url = loadRemoteRoute.replace(/\/:(\w*)\//g, function (match, replacement) {
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
                serviceType: "aapi",
                cache: false
            },
            {
                successRule: {
                    status: "ok"
                },
                errorRule: {
                    status: "error"
                },
                scope: $scope.$id
            }
        );
    };

    return overTheBox;
});
