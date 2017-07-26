angular.module("ovh-api-services").service("CloudProjectServiceInfosLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudProjectServiceInfosLexiQuery");
    var cache = $cacheFactory("CloudProjectServiceInfosLexi");

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
