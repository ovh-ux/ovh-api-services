angular
    .module("ovh-api-services")
    .service("OvhApiOrderUpgradeMicrosoftExchangeV6", function ($resource, $cacheFactory) {

        "use strict";

        // Cache to invalidate
        var queryCache = $cacheFactory("OvhApiOrderUpgradeMicrosoftExchangeV6Query");
        var cache = $cacheFactory("OvhApiOrderUpgradeMicrosoftExchangeV6");

        var interceptor = {
            response: function (response) {
                resource.resetQueryCache();
                return response.data;
            }
        };

        var resource = $resource("/order/upgrade/microsoftExchange/:serviceName/:planCode", {
            serviceName: "@serviceName",
            planCode: "@planCode"
        }, {
            getAvailableServices: { method: "GET", cache: queryCache, isArray: true, url: "/order/upgrade/microsoftExchange" },
            getAvailableOffers: { method: "GET", cache: queryCache, isArray: true, url: "/order/upgrade/microsoftExchange/:serviceName" },
            getOrder: { method: "GET", cache: cache, isArray: false },
            order: { method: "POST", cache: cache, isArray: false, interceptor: interceptor }
        });

        resource.resetCache = function () {
            cache.removeAll();
        };

        resource.resetQueryCache = function () {
            queryCache.removeAll();
        };

        return resource;
    });
