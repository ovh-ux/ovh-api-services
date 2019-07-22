angular.module("ovh-api-services").service("OvhApiDedicatedCloudLocationStockV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudLocationStockV6Query");
    var baseUrl = "/dedicatedCloud/location/:pccZone/stock";

    var stockResource = $resource(baseUrl, {
        pccZone: "@pccZone"
    }, {
        queryPcc: {
            url: baseUrl + "/pcc",
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        queryHost: {
            url: baseUrl + "/host",
            method: "GET",
            cache: queryCache,
            isArray: true,
            params: {
                minYear: "@minYear"
            }
        },
        queryZpool: {
            url: baseUrl + "/zpool",
            method: "GET",
            cache: queryCache,
            isArray: true,
            params: {
                profileFilter: "@profileFilter"
            }
        }
    });

    stockResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return stockResource;
});
