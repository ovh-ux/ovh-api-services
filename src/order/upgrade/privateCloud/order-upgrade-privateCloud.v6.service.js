angular
    .module("ovh-api-services")
    .service("OvhApiOrderUpgradePrivateCloudV6", function ($resource, $cacheFactory) {

        "use strict";

        // Cache to invalidate
        var queryCache = $cacheFactory("OvhApiOrderUpgradePrivateCloudV6Query");
        var cache = $cacheFactory("OvhApiOrderUpgradePrivateCloudV6");

        var interceptor = {
            response: function (response) {
                resource.resetCache();
                resource.resetQueryCache();
                return response.data;
            }
        };

        var resource = $resource("/order/upgrade/privateCloud/:serviceName/:planCode", {
            serviceName: "@serviceName",
            planCode: "@planCode"
        }, {
            get: { method: "GET", cache: queryCache, isArray: true, url: "/order/upgrade/privateCloud/:serviceName" },
            getPlan: { method: "GET", cache: cache, isArray: false },
            post: { method: "POST", interceptor: interceptor },
            query: { method: "GET", cache: queryCache, isArray: true, url: "/order/upgrade/privateCloud" }
        });

        resource.resetCache = function () {
            cache.removeAll();
        };

        resource.resetQueryCache = function () {
            queryCache.removeAll();
        };

        return resource;
    });
