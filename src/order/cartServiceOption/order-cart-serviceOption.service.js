angular.module("ovh-api-services").service("OvhApiOrderCartServiceOption", function ($injector) {

    "use strict";
    return {
        Microsoft: function () {
            return $injector.get("OvhApiOrderCartServiceOptionMicrosoft");
        },
        MicrosoftExchange: function () {
            return $injector.get("OvhApiOrderCartServiceOptionMicrosoftExchange");
        },
        Vps: function () {
            return $injector.get("OvhApiOrderCartServiceOptionVps");
        },
        v6: function () {
            return $injector.get("OvhApiOrderCartServiceOptionV6");
        }
    };
});
