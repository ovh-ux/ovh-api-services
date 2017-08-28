angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPublicLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectNetworkPublicLexiQuery");

    var publicNetworksResources = $resource("/cloud/project/:serviceName/network/public/:networkId", {
        serviceName: "@serviceName",
        networkId: "@networkId"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    publicNetworksResources.resetAllCache = function () {
        publicNetworksResources.resetQueryCache();
    };

    publicNetworksResources.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return publicNetworksResources;
});
