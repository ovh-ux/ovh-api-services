angular.module("ovh-api-services").service("OvhApiDedicatedCloudVRackV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudVRackV6Query");
    var cache = $cacheFactory("OvhApiDedicatedCloudVRackV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var vrackResource = $resource("/dedicatedCloud/:serviceName/vrack/:vrack", {
        serviceName: "@serviceName",
        vrack: "@vrack"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    vrackResource.resetCache = function () {
        cache.removeAll();
    };

    vrackResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return vrackResource;
});
