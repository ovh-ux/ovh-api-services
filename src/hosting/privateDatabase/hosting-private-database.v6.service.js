angular.module("ovh-api-services").service("OvhApiHostingPrivateDatabaseV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiHostingPrivateDatabaseV6Cache");

    var interceptor = {
        response: function (response) {
            cache.removeAll();
            return response;
        }
    };

    var resource = $resource("/hosting/privateDatabase/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: cache
        },
        get: {
            method: "GET",
            cache: cache
        },
        put: {
            method: "PUT",
            interceptor: interceptor
        },
        availableOrderCapacities: {
            method: "GET",
            url: "/hosting/privateDatabase/availableOrderCapacities",
            params: {
                offer: "@offer"
            }
        }
    });

    resource.resetAllCache = function () {
        resource.resetCache();
    };

    resource.resetCache = function () {
        cache.removeAll();
    };

    return resource;
});
