angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPrivateLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectNetworkPrivateLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectNetworkPrivateLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var privateNetworksResources = $resource("/cloud/project/:serviceName/network/private/:networkId", {
        serviceName: "@serviceName",
        networkId: "@networkId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        save: { method: "POST", interceptor: interceptor }
    });

    privateNetworksResources.resetAllCache = function () {
        privateNetworksResources.resetCache();
        privateNetworksResources.resetQueryCache();
    };

    privateNetworksResources.resetCache = function () {
        cache.removeAll();
    };

    privateNetworksResources.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return privateNetworksResources;
});
