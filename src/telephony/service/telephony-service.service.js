angular.module("ovh-api-services").service("OvhApiTelephonyService", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyServiceLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyServiceErika");
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
