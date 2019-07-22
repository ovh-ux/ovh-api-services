angular.module("ovh-api-services").service("OvhApiPackXdslResiliationAapi", function ($resource, OvhApiPackXdslResiliation) {
    "use strict";

    return $resource("/pack/xdsl/canCancelResiliation/all", {
        packId: "@packId"
    }, {
        canCancelAll: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: OvhApiPackXdslResiliation.cache
        },
        terms: {
            url: "/pack/xdsl/:packId/resiliationTerms",
            method: "GET",
            isArray: false,
            serviceType: "aapi",
            cache: OvhApiPackXdslResiliation.cache
        },
        subServicesTerms: {
            url: "/pack/:packId/resiliate/subServicesInfos",
            method: "GET",
            isArray: false,
            serviceType: "aapi",
            cache: OvhApiPackXdslResiliation.cache
        }

    });
});
