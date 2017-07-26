angular.module("ovh-api-services").service("PackXdslResiliationAapi", function ($resource, PackXdslResiliation) {
    "use strict";

    return $resource("/pack/xdsl/canCancelResiliation/all", {
        packId: "@packId"
    }, {
        canCancelAll: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: PackXdslResiliation.cache
        },
        terms: {
            url: "/pack/xdsl/:packId/resiliationTerms",
            method: "GET",
            isArray: false,
            serviceType: "aapi",
            cache: PackXdslResiliation.cache
        },
        subServicesTerms: {
            url: "/pack/:packId/resiliate/subServicesInfos",
            method: "GET",
            isArray: false,
            serviceType: "aapi",
            cache: PackXdslResiliation.cache
        }

    });
});
