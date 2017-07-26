angular.module("ovh-api-services").service("DedicatedCloudDatacenterLexi", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("DedicatedCloudDatacenterLexi");
    var queryCache = $cacheFactory("DedicatedCloudDatacenterLexiQuery");

    var interceptor = {
        response: function (response) {
            otherCache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var datacenterResource = $resource("/dedicatedCloud/:serviceName/datacenter/:datacenterId", {
        serviceName: "@serviceName",
        datacenterId: "@datacenterId"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: otherCache },
        put: { method: "PUT", interceptor: interceptor },
        save: { method: "POST", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    datacenterResource.resetAllCache = function () {
        datacenterResource.resetOtherCache();
        datacenterResource.resetQueryCache();
    };

    datacenterResource.resetOtherCache = function () {
        otherCache.removeAll();
    };

    datacenterResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return datacenterResource;
});
