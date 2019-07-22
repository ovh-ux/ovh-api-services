angular
    .module("ovh-api-services")
    .service("OvhApiOrderUpgradePrivateCloud", function ($injector) {

        "use strict";
        return {
            v6: function () {
                return $injector.get("OvhApiOrderUpgradePrivateCloudV6");
            }
        };
    });
