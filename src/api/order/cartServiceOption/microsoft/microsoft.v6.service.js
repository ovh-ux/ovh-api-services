angular
    .module("ovh-api-services")
    .service("OvhApiOrderCartServiceOptionMicrosoftV6", function ($resource, $cacheFactory) {
        "use strict";

        var queryCache = $cacheFactory("OvhApiOrderCartServiceOptionMicrosoftV6Query");
        var cache = $cacheFactory("OvhApiOrderCartServiceOptionMicrosoftV6");

        var interceptor = {
            response: function (response) {
                cache.remove(response.config.url);
                queryCache.removeAll();
                return response.data;
            }
        };

        var resource = $resource("/order/cartServiceOption/microsoft/:serviceName", {
            serviceName: "@serviceName"
        }, {
            get: { method: "GET", isArray: true, cache: cache },
            getAvailableServices: { method: "GET", isArray: true, cache: cache, url: "/order/cartServiceOption/microsoft" },
            post: {
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
