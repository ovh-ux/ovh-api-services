angular
    .module("ovh-api-services")
    .service("OvhApiOrderCartServiceOptionMicrosoftExchangeV6", function ($resource, $cacheFactory) {
        "use strict";

        var queryCache = $cacheFactory("OvhApiOrderCartServiceOptionMicrosoftExchangeV6Query");
        var cache = $cacheFactory("OvhApiOrderCartServiceOptionMicrosoftExchangeV6");

        var interceptor = {
            response: function (response) {
                cache.remove(response.config.url);
                queryCache.removeAll();
                return response.data;
            }
        };

        var resource = $resource("/order/cartServiceOption/microsoftExchange/:serviceName", {
            serviceName: "@serviceName"
        }, {
            getAvailableOffers: { method: "GET", isArray: true, cache: cache },
            getServices: { method: "GET", isArray: true, cache: cache, url: "/order/cartServiceOption/microsoftExchange" },
            orderOptions: {
                method: "POST",
                cache: queryCache,
                interceptor: interceptor,
                params: {
                    cartId: "@cartId",
                    duration: "@duration",
                    planCode: "@planCode",
                    pricingMode: "@pricingMode",
                    quantity: "@quantity"
                }
            }
        });

        resource.resetAllCache = function () {
            resource.resetCache();
            resource.resetQueryCache();
        };

        resource.resetCache = function () {
            cache.removeAll();
        };

        resource.resetQueryCache = function () {
            queryCache.removeAll();
        };

        return resource;
    });
