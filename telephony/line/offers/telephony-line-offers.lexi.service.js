angular.module("ovh-api-services").service("TelephonyLineOffersLexi", function ($resource) {
    "use strict";

    return $resource("/telephony/line/offers", null, {
        phones: {
            url: "/telephony/line/offer/phones",
            method: "GET",
            isArray: true
        },
        query: {
            method: "GET",
            isArray: true
        }
    });
});
