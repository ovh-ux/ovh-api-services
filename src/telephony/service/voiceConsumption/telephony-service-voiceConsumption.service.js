angular.module("ovh-api-services").service("TelephonyServiceVoiceConsumption", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyServiceVoiceConsumptionLexi");
        },
        Erika: function () {
            return $injector.get("TelephonyServiceVoiceConsumptionErika");
        },
        Aapi: function () {
            return $injector.get("TelephonyServiceVoiceConsumptionAapi");
        }
    };
});
