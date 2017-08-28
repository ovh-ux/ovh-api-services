angular.module("ovh-api-services").service("OvhApiXdslEligibilityLexi", function ($resource, OvhApiXdslEligibility) {
    "use strict";

    return $resource("/xdsl/eligibility", {
    }, {
        getCities: {
            method: "GET",
            isArray: true,
            url: "/xdsl/eligibility/cities",
            cache: OvhApiXdslEligibility.cache
        },
        getStreets: {
            method: "GET",
            isArray: true,
            url: "/xdsl/eligibility/streets",
            cache: OvhApiXdslEligibility.cache
        }
    });
});
