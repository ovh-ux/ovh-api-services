angular.module("ovh-api-services").service("OvhApiPriceOverTheBoxOfferV6", function ($resource) {
    "use strict";

    return $resource("/price/overTheBox/offer/:offerName", {
        offerName: "@offerName"
    }, {
        schema: { method: "GET", url: "/price.json" }
    });
});

