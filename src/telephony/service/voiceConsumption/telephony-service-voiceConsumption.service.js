angular.module("ovh-api-services").service("OvhApiTelephonyServiceVoiceConsumption", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyServiceVoiceConsumptionV6");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyServiceVoiceConsumptionV7");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyServiceVoiceConsumptionAapi");
        }
    };
});
