angular.module("ovh-api-services").service("OvhApiMeAlertsAapi", function ($resource) {
    "use strict";

    return $resource("/me/alerts", {}, {
        query: {
            method: "GET",
            isArray: true,
            url: "/me/alerts",
            serviceType: "aapi"
        }
    });
});
