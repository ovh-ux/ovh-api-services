angular
    .module("ovh-api-services")
    .service("OvhApiOrderUpgrade", function ($injector) {

        "use strict";
        return {
            MicrosoftExchange: function () {
                return $injector.get("OvhApiOrderUpgradeMicrosoftExchange");
            },
            Vps: function () {
                return $injector.get("OvhApiOrderVps");
            },
            PrivateCloud: function () {
                return $injector.get("OvhApiOrderUpgradePrivateCloud");
            }
        };
    });
