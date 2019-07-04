angular.module("ovh-api-services").service("OvhApiCloudProjectAvailableRegionsV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectAvailableRegionsV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectAvailableRegionsV6");

    var regions = $resource("/cloud/project/:serviceName/regionAvailable", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true,
            transformResponse: function (regionsResp, headers, status) {
                if (status === 200) {
                    return regionsResp.sort();
                }
                return regionsResp;
            }
        }
    });

    regions.resetCache = function () {
        cache.removeAll();
    };

    regions.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return regions;

});
