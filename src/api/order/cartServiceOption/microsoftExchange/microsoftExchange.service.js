angular.module("ovh-api-services").service("OvhApiOrderCartServiceOptionMicrosoftExchange", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiOrderCartServiceOptionMicrosoftExchangeV6");
        }
    };
});
