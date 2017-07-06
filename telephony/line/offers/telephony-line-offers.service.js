angular.module("ovh-api-services").service("TelephonyLineOffers", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyLineOffersLexi");
        }
    };
});
