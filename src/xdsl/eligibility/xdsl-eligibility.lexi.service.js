angular.module("ovh-api-services").service("XdslEligibilityLexi", function ($resource, XdslEligibility) {
    "use strict";

    return $resource("/xdsl/eligibility", {
    }, {
        getCities: {
            method: "GET",
            isArray: true,
            url: "/xdsl/eligibility/cities",
            cache: XdslEligibility.cache
        },
        getStreets: {
            method: "GET",
            isArray: true,
            url: "/xdsl/eligibility/streets",
            cache: XdslEligibility.cache
        }
    });
});
