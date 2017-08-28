angular.module("ovh-api-services").service("OvhApiOrder", function ($injector) {
    "use strict";
    return {
        Router: function () {
            return $injector.get("OvhApiOrderRouter");
        },
        License: function () {
            return $injector.get("OvhApiOrderLicense");
        },
        Vrack: function () {
            return $injector.get("OvhApiOrderVrack");
        },
        DedicatedNasha: function () {
            return $injector.get("OvhApiOrderDedicatedNasha");
        },
        Telephony: function () {
            return $injector.get("OvhApiOrderTelephony");
        },
        Freefax: function () {
            return $injector.get("OvhApiOrderFreefax");
        },
        Sms: function () {
            return $injector.get("OvhApiOrderSms");
        },
        Lexi: function () {
            return $injector.get("OvhApiOrderLexi");
        }
    };
});
