angular.module("ovh-api-services").service("OvhApiMeAgreementsV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiMeAgreementsV6Query");

    var agreementResource = $resource("/me/agreements/:id", {
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache,
            params: {
                contractId: "@contractId"
            }
        },
        accept: {
            url: "/me/agreements/:id/accept",
            method: "POST"
        },
        contract: {
            url: "/me/agreements/:id/contract",
            method: "GET"
        }
    });

    agreementResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return agreementResource;
});
