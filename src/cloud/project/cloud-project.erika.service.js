angular.module("ovh-api-services").service("OvhApiCloudProjectErika", function ($resource, $cacheFactory, Apiv7Endpoint) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectErika");
    var queryCache = $cacheFactory("OvhApiCloudProjectErikaQuery");

    var resource = new Apiv7Endpoint("/cloud/project/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true,
            serviceType: "apiv7"
        }
    });

    resource.resetCache = function () {
        cache.removeAll();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
});
