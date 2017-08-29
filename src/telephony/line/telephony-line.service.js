angular.module("ovh-api-services").service("OvhApiTelephonyLine", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLineLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyLineAapi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyLineErika");
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
