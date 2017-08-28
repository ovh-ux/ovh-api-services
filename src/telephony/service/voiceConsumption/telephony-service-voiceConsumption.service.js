angular.module("ovh-api-services").service("OvhApiTelephonyServiceVoiceConsumption", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyServiceVoiceConsumptionLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyServiceVoiceConsumptionErika");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyServiceVoiceConsumptionAapi");
        }
    };
});
