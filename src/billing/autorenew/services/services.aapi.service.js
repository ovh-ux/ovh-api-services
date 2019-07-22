angular.module("ovh-api-services").service("OvhApiBillingAutorenewServicesAapi", function ($resource) {
    "use strict";

    var vpsResource = $resource("/sws/billing/autorenew/services", {
    }, {
        query: {
            method: "GET",
            serviceType: "aapi"
        },
        put: {
            url: "/sws/billing/autorenew/services/update",
            method: "PUT",
            serviceType: "aapi"
        }
    });

    return vpsResource;
});
