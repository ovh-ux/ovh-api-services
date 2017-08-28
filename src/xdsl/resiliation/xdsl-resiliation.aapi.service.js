angular.module("ovh-api-services").service("OvhApiXdslResiliationAapi", function ($resource, OvhApiXdslResiliation) {
    "use strict";

    return $resource("/xdsl/canCancelResiliation/all", {
    }, {
        canCancelAll: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: OvhApiXdslResiliation.cache
        },
        terms: {
            url: "/xdsl/:serviceName/resiliationTerms",
            method: "GET",
            isArray: false,
            serviceType: "aapi",
            cache: OvhApiXdslResiliation.cache
        }
    });
});
