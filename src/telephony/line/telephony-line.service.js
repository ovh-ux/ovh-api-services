angular.module("ovh-api-services").service("TelephonyLine", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyLineLexi");
        },
        Aapi: function () {
            return $injector.get("TelephonyLineAapi");
        },
        Erika: function () {
            return $injector.get("TelephonyLineErika");
        },
        AbbreviatedNumber: function () {
            return $injector.get("TelephonyLineAbbreviatedNumber");
        },
        Phone: function () {
            return $injector.get("TelephonyLinePhone");
        },
        Options: function () {
            return $injector.get("TelephonyLineOptions");
        },
        Click2Call: function () {
            return $injector.get("TelephonyLineClick2Call");
        },
        Offers: function () {
            return $injector.get("TelephonyLineOffers");
        }
    };
});
