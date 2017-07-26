angular.module("ovh-api-services").service("CloudAapi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudAapiQuery");

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
