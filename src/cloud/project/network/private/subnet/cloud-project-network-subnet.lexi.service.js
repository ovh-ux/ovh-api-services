angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPrivateSubnetLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectNetworkPrivateSubnetLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectNetworkPrivateSubnetLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var privateNetworkSubnetResources = $resource("/cloud/project/:serviceName/network/private/:networkId/subnet/:subnetId", {
        serviceName: "@serviceName",
        networkId: "@networkId",
        subnetId: "@subnetId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        save: { method: "POST", interceptor: interceptor }
    });

    privateNetworkSubnetResources.resetAllCache = function () {
        privateNetworkSubnetResources.resetCache();
        privateNetworkSubnetResources.resetQueryCache();
    };

    privateNetworkSubnetResources.resetCache = function () {
        cache.removeAll();
    };

    privateNetworkSubnetResources.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return privateNetworkSubnetResources;
});
