angular.module("ovh-api-services").service("OvhApiPriceOverTheBoxOffer", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiPriceOverTheBoxOfferV6");
        }
    };

});
