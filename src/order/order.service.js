angular.module("ovh-api-services").service("OvhApiOrder", function ($injector) {
    "use strict";
    return {
        Cart: function () {
            return $injector.get("OvhApiOrderCart");
        },
        CartServiceOption: function () {
            return $injector.get("OvhApiOrderCartServiceOption");
        },
        DedicatedNasha: function () {
            return $injector.get("OvhApiOrderDedicatedNasha");
        },
        Freefax: function () {
            return $injector.get("OvhApiOrderFreefax");
        },
        License: function () {
            return $injector.get("OvhApiOrderLicense");
        },
        Router: function () {
            return $injector.get("OvhApiOrderRouter");
        },
        Sms: function () {
            return $injector.get("OvhApiOrderSms");
        },
        Telephony: function () {
            return $injector.get("OvhApiOrderTelephony");
        },
        Vrack: function () {
            return $injector.get("OvhApiOrderVrack");
        },
        Upgrade: function () {
            return $injector.get("OvhApiOrderUpgrade");
        },
        v6: function () {
            return $injector.get("OvhApiOrderV6");
        }
    };
});
