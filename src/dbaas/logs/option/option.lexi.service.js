angular.module("ovh-api-services").service("OvhApiDbaasLogsOptionLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsOptionLexi");
    var queryCache = $cacheFactory("OvhApiDbaasLogsOptionLexiQuery");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var optionResource = $resource("/dbaas/logs/:serviceName/option", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache }
    });

    optionResource.resetAllCache = function () {
        optionResource.resetCache();
        optionResource.resetQueryCache();
    };

    optionResource.resetCache = function () {
        cache.removeAll();
    };

    optionResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return optionResource;
});
