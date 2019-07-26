angular.module("ovh-api-services").service("OvhApiCloudProjectServiceInfosV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectServiceInfosV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectServiceInfosV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var serviceInfosResource = $resource("/cloud/project/:serviceName/serviceInfos", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: cache, isArray: true },
        put: { method: "PUT", interceptor: interceptor }
    });

    serviceInfosResource.resetCache = function () {
        cache.removeAll();
    };

    serviceInfosResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return serviceInfosResource;
});
