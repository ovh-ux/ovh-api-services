angular.module("ovh-api-services").service("DedicatedCloudLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DedicatedCloudLexi");
    var queryCache = $cacheFactory("DedicatedCloudLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var dedicatedCloudResource = $resource("/dedicatedCloud/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: cache },
        put: { method: "PUT", interceptor: interceptor },
        getServiceInfos: {
            url: "/dedicatedCloud/:serviceName/serviceInfos",
            method: "GET",
            cache: cache
        }
    });

    dedicatedCloudResource.resetAllCache = function () {
        dedicatedCloudResource.resetCache();
        dedicatedCloudResource.resetQueryCache();
    };

    dedicatedCloudResource.resetCache = function () {
        cache.removeAll();
    };

    dedicatedCloudResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return dedicatedCloudResource;
});
