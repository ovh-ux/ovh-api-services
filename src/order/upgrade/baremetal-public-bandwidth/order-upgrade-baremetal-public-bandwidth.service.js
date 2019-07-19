angular
    .module("ovh-api-services")
    .service("OvhApiOrderUpgradeBaremetalPublicBandwidth", function ($injector) {

        "use strict";
        return {
            v6: function () {
                return $injector.get("OvhApiOrderUpgradeBaremetalPublicBandwidthV6");
            }
        };
    });
