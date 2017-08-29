angular.module("ovh-api-services").service("OvhApiPriceOverTheBoxOffer", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiPriceOverTheBoxOfferLexi");
        }
    };

});
