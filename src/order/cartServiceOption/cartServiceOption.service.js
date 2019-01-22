angular.module("ovh-api-services").service("OvhApiOrderCartServiceOption", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiOrderCartServiceOptionV6");
        },
        Microsoft: function () {
            return $injector.get("OvhApiOrderCartServiceOptionMicrosoft");
        },
        MicrosoftExchange: function () {
            return $injector.get("OvhApiOrderCartServiceOptionMicrosoftExchange");
        }
    };
});
