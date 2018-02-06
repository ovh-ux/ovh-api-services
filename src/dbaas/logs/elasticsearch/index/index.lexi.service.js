angular.module("ovh-api-services").service("OvhApiDbaasLogsIndexLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsIndexLexi");
    var queryCache = $cacheFactory("OvhApiDbaasLogsIndexLexiQuery");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var index = $resource("/dbaas/logs/:serviceName/output/elasticsearch/index", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache, isArray: true },
        post: {
            method: "POST",
            isArray: true,
            params: {
                alertNotifyEnabled: "@alertNotifyEnabled",
                description: "@description",
                optionId: "@optionId",
                suffix: "@suffix",
            },
            interceptor: interceptor            
        },

        put: {
            url: "/dbaas/logs/:serviceName/output/elasticsearch/index/:indexId",
            method: "PUT",
            params: {
                alertNotifyEnabled: "@alertNotifyEnabled",
                description: "@description"
            },
            interceptor: interceptor
        },

        "delete": {
            method: "DELETE",
            url: "/dbaas/logs/:serviceName/output/elasticsearch/index/:indexId",
            interceptor: interceptor
        }
    });

    index.resetAllCache = function () {
        index.resetCache();
        index.resetQueryCache();
    };

    index.resetCache = function () {
        cache.removeAll();
    };

    index.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return index;
});
