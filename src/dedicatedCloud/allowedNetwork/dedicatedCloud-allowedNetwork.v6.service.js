angular.module("ovh-api-services").service("OvhApiDedicatedCloudAllowedNetworkV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudAllowedNetworkV6Query");
    var cache = $cacheFactory("OvhApiDedicatedCloudAllowedNetworkV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var networkAllowedResource = $resource("/dedicatedCloud/:serviceName/allowedNetwork/:networkAccessId", {
        serviceName: "@serviceName",
        networkAccessId: "@networkAccessId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: cache, isArray: true },
        put: { method: "PUT", interceptor: interceptor },
        save: { method: "POST", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    networkAllowedResource.resetCache = function () {
        cache.removeAll();
    };

    networkAllowedResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return networkAllowedResource;
});
