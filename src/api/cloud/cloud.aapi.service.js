angular.module("ovh-api-services").service("OvhApiCloudAapi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudAapiQuery");

    var instancesResource = $resource("/cloud/instances", {}, {
        query: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: queryCache
        }
    });

    instancesResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return instancesResource;
});
