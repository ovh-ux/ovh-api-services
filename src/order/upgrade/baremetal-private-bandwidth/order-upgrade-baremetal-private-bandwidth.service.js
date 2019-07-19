angular
    .module("ovh-api-services")
    .service("OvhApiOrderUpgradeBaremetalPrivateBandwidth", function ($injector) {

        "use strict";
        return {
            v6: function () {
                return $injector.get("OvhApiOrderUpgradeBaremetalPrivateBandwidthV6");
            }
        };
    });
