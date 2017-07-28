angular.module("ovh-api-services").service("Order", function ($injector) {
    "use strict";
    return {
        Router: function () {
            return $injector.get("OrderRouter");
        },
        License: function () {
            return $injector.get("OrderLicense");
        },
        Vrack: function () {
            return $injector.get("OrderVrack");
        },
        DedicatedNasha: function () {
            return $injector.get("OrderDedicatedNasha");
        },
        Telephony: function () {
            return $injector.get("OrderTelephony");
        },
        Freefax: function () {
            return $injector.get("OrderFreefax");
        },
        Sms: function () {
            return $injector.get("OrderSms");
        },
        Lexi: function () {
            return $injector.get("OrderLexi");
        }
    };
});
