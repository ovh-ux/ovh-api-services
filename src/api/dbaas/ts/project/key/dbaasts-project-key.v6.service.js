angular.module("ovh-api-services").service("OvhApiDBaasTsProjectKeyV6", function ($resource, $q, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDBaasTsProjectKeyV6Query");
    var cache = $cacheFactory("OvhApiDBaasTsProjectKeyV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var keyResource = $resource("/dbaas/timeseries/:serviceName/key/:keyId", {
        serviceName: "@serviceName",
        keyId: "@keyId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        create: { method: "POST", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        update: { method: "PUT", interceptor: interceptor }
    });

    keyResource.queryDetails = function (serviceName) {
        var queue = [];
        return keyResource.query({ serviceName: serviceName }).$promise
            .then(function (keyIds) {
                angular.forEach(keyIds, function (keyId) {
                    queue.push(
                        keyResource.get({
                            serviceName: serviceName,
                            keyId: keyId
                        }).$promise
                    );
                });
                return $q.all(queue);
            });
    };

    keyResource.resetAllCache = function () {
        keyResource.resetCache();
        keyResource.resetQueryCache();
    };

    keyResource.resetCache = function () {
        cache.removeAll();
    };

    keyResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return keyResource;
});
