angular.module("ovh-api-services").service("OvhApiCloudProjectRegionV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectRegionV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectRegionV6");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var regions = $resource("/cloud/project/:serviceName/region/:id", {
        serviceName: "@serviceName",
        id: "@id"
    }, {
        get: { method: "GET", cache: cache },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true,
            transformResponse: function (regionsResp, headers, status) {
                var regionsRsp = regionsResp;

                if (status === 200) {
                    regionsRsp = angular.fromJson(regionsRsp); // IE11
                    return regionsRsp.sort();
                }
                return regionsRsp;

            }
        },
        addRegion: { method: "POST", interceptor: interceptor }
    });

    regions.resetCache = function () {
        cache.removeAll();
    };

    regions.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return regions;

});
