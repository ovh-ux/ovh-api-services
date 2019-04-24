angular.module("ovh-api-services").service("OvhApiConnectivityEligibilitySearchV6", function ($resource) {
    "use strict";

    return $resource("/connectivity/eligibility/search", {
    }, {
        getCities: {
            url: "/connectivity/eligibility/search/cities",
            method: "POST",
            isArray: false,
            params: {
                zipCode: "@zipCode"
            }
        },
        getStreets: {
            url: "/connectivity/eligibility/search/streets",
            method: "POST",
            isArray: false,
            params: {
                inseeCode: "@inseeCode"
            }
        }
    });
});
