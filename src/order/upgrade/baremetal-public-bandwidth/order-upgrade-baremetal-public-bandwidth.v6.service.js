angular
    .module("ovh-api-services")
    .service("OvhApiOrderUpgradeBaremetalPublicBandwidthV6", function ($resource, $cacheFactory) {

        "use strict";

        // Cache to invalidate
        var queryCache = $cacheFactory("OvhApiOrderUpgradeBaremetalPublicBandwidthV6Query");
        var cache = $cacheFactory("OvhApiOrderUpgradeBaremetalPublicBandwidthV6");

        var interceptor = {
            response: function (response) {
                resource.resetCache();
                resource.resetQueryCache();
                return response.data;
            }
        };

        var resource = $resource("/order/upgrade/baremetalPublicBandwidth/:serviceName/:planCode", {
            serviceName: "@serviceName",
            planCode: "@planCode"
        }, {
            getPublicBandwidthOptions: {
                method: "GET",
                cache: queryCache,
                isArray: true,
                url: "/order/upgrade/baremetalPublicBandwidth/:serviceName"
            },
            getPublicBandwidthOrder: {
                method: "GET",
                cache: cache,
                url: "/order/upgrade/baremetalPublicBandwidth/:serviceName/:planCode",
                params: {
                    quantity: "@quantity"
                }
            },
            postPublicBandwidthPlaceOrder: {
                method: "POST",
                interceptor: interceptor,
                url: "/order/upgrade/baremetalPublicBandwidth/:serviceName/:planCode",
                params: {
                    quantity: "@quantity",
                    autoPayWithPreferredPaymentMethod: "@autoPayWithPreferredPaymentMethod"
                }
            }
        });

        resource.resetCache = function () {
            cache.removeAll();
        };

        resource.resetQueryCache = function () {
            queryCache.removeAll();
        };

        return resource;
    });
