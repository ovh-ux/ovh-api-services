angular.module("ovh-api-services").service("OvhApiConnectivityEligibilityV6", function ($resource, OvhApiConnectivityEligibility) {
    "use strict";

    return $resource("/connectivity/eligibility/search/buildingDetails ", {
    }, {
        buildingDetails: {
            method: "POST",
            isArray: false,
            cache: OvhApiConnectivityEligibility.cache
        }
    });
});
