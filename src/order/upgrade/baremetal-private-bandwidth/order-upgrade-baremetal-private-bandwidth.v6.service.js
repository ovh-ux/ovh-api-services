angular
    .module("ovh-api-services")
    .service("OvhApiOrderUpgradeBaremetalPrivateBandwidthV6", function ($resource, $cacheFactory) {

        "use strict";

        // Cache to invalidate
        var queryCache = $cacheFactory("OvhApiOrderUpgradeBaremetalPrivateBandwidthV6Query");
        var cache = $cacheFactory("OvhApiOrderUpgradeBaremetalPrivateBandwidthV6");

        var interceptor = {
            response: function (response) {
                resource.resetCache();
                resource.resetQueryCache();
                return response.data;
            }
        };

        var resource = $resource("/order/upgrade/baremetalPrivateBandwidth/:serviceName/:planCode", {
            serviceName: "@serviceName",
            planCode: "@planCode"
        }, {
            getPrivateBandwidthOptions: {
                method: "GET",
                cache: queryCache,
                isArray: true,
                url: "/order/upgrade/baremetalPrivateBandwidth/:serviceName"
            },
            getPrivateBandwidthOrder: {
                method: "GET",
                cache: cache,
                url: "/order/upgrade/baremetalPrivateBandwidth/:serviceName/:planCode",
                params: {
                    quantity: "@quantity"
                }
            },
            postPrivateBandwidthPlaceOrder: {
                method: "POST",
                interceptor: interceptor,
                url: "/order/upgrade/baremetalPrivateBandwidth/:serviceName/:planCode",
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
