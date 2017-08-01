angular.module("ovh-api-services").service("CloudProjectRegionLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudProjectRegionLexiQuery");
    var cache = $cacheFactory("CloudProjectRegionLexi");

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
                    regionsRsp = _.filter(regionsRsp, function (region) {
                        return !/WAW/.test(region);
                    });
                    return regionsRsp.sort();
                }
                return regionsRsp;

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
