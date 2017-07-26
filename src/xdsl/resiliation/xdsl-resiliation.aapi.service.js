angular.module("ovh-api-services").service("XdslResiliationAapi", function ($resource, XdslResiliation) {
    "use strict";

    return $resource("/xdsl/canCancelResiliation/all", {
    }, {
        canCancelAll: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: XdslResiliation.cache
        },
        terms: {
            url: "/xdsl/:serviceName/resiliationTerms",
            method: "GET",
            isArray: false,
            serviceType: "aapi",
            cache: XdslResiliation.cache
        }
    });
});
