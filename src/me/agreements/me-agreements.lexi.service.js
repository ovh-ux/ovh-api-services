angular.module("ovh-api-services").service("OvhApiMeAgreementsLexi", function ($resource) {
    "use strict";

    return $resource("/me/agreements/:id", {
        id: "@id"
    }, {
        accept: {
            url: "/me/agreements/:id/accept",
            method: "POST"
        },
        contract: {
            url: "/me/agreements/:id/contract",
            method: "GET"
        }
    });
});
