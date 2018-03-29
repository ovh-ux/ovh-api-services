angular.module("ovh-api-services").service("OvhApiTelephonyLineOffers", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLineOffersV6");
        }
    };
});
