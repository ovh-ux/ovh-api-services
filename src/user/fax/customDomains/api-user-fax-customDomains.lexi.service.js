angular.module("ovh-api-services").service("UserFaxCustomDomainsLexi", function ($resource) {
    "use strict";

    return $resource("/me/fax/customDomains/:id", {
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        },
        create: {
            method: "POST"
        },
        remove: {
            method: "DELETE"
        }
    });
});
