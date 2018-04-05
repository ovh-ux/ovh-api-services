angular.module("ovh-api-services").service("OvhApiTelephonyService", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyServiceV6");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyServiceV7");
        },
        VoiceConsumption: function () {
            return $injector.get("OvhApiTelephonyServiceVoiceConsumption");
        },
        FaxConsumption: function () {
            return $injector.get("OvhApiTelephonyServiceFaxConsumption");
        },
        Task: function () {
            return $injector.get("OvhApiTelephonyServiceTask");
        },
        OfferTask: function () {
            return $injector.get("OvhApiTelephonyServiceOfferTask");
        },
        RepaymentConsumption: function () {
            return $injector.get("OvhApiTelephonyServiceRepaymentConsumption");
        }
    };
});
