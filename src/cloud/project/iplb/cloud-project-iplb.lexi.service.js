angular.module("ovh-api-services").service("OvhApiCloudProjectIplbLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectIplbLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectIplbLexi");

    var regions = $resource("/cloud/project/:serviceName/ipLoadbalancing/:id", {
        serviceName: "@serviceName",
        id: "@id"
    }, {
        get: { method: "GET", cache: cache },
        post : { method: "POST" },
        validate : { method: "POST", url: "/cloud/project/:serviceName/ipLoadbalancing/:id/validate"},
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
