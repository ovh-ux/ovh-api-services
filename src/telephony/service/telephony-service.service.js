angular.module("ovh-api-services").service("TelephonyService", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyServiceLexi");
        },
        Erika: function () {
            return $injector.get("TelephonyServiceErika");
        },
        VoiceConsumption: function () {
            return $injector.get("TelephonyServiceVoiceConsumption");
        },
        FaxConsumption: function () {
            return $injector.get("TelephonyServiceFaxConsumption");
        },
        Task: function () {
            return $injector.get("TelephonyServiceTask");
        },
        OfferTask: function () {
            return $injector.get("TelephonyServiceOfferTask");
        },
        RepaymentConsumption: function () {
            return $injector.get("TelephonyServiceRepaymentConsumption");
        }
    };
});
