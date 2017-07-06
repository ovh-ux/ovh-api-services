angular.module("ovh-api-services").service("PriceOverTheBoxOfferLexi", function ($resource) {
    "use strict";

    return $resource("/price/overTheBox/offer/:offerName", {
        offerName: "@offerName"
    }, {
        schema: { method: "GET", url: "/price.json" }
    });
});

