angular
    .module("ovh-api-services")
    .service("OvhApiOrderUpgrade", function ($injector) {

        "use strict";
        return {
            MicrosoftExchange: function () {
                return $injector.get("OvhApiOrderUpgradeMicrosoftExchange");
            }
        };
    });
