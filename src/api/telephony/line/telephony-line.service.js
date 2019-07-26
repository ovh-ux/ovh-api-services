angular.module("ovh-api-services").service("OvhApiTelephonyLine", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLineV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyLineAapi");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyLineV7");
        },
        AbbreviatedNumber: function () {
            return $injector.get("OvhApiTelephonyLineAbbreviatedNumber");
        },
        Phone: function () {
            return $injector.get("OvhApiTelephonyLinePhone");
        },
        Options: function () {
            return $injector.get("OvhApiTelephonyLineOptions");
        },
        Click2Call: function () {
            return $injector.get("OvhApiTelephonyLineClick2Call");
        },
        Offers: function () {
            return $injector.get("OvhApiTelephonyLineOffers");
        }
    };
});
