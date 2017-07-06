angular.module("ovh-api-services").service("PriceOverTheBoxOffer", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("PriceOverTheBoxOfferLexi");
        }
    };

});
