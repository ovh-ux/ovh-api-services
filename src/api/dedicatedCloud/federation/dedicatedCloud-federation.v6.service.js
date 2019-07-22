angular.module("ovh-api-services").service("OvhApiDedicatedCloudFederationV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudFederationV6Query");

    var federationResource = $resource("/dedicatedCloud/:serviceName/federation", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", cache: queryCache }
    });

    federationResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return federationResource;
});
