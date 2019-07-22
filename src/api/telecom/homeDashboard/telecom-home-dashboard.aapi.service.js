angular.module("ovh-api-services").service("OvhApiTelecomHomeDashboardAapi", function ($resource, OvhApiTelecomHomeDashboard) {
    "use strict";

    return $resource("/telecom/homeDashboard", {}, {
        get: {
            method: "GET",
            serviceType: "aapi",
            isArray: false,
            cache: OvhApiTelecomHomeDashboard.cache
        },
        incidents: {
            url: "/telecom/homeDashboard/incidents",
            serviceType: "aapi",
            method: "GET",
            isArray: false,
            cache: OvhApiTelecomHomeDashboard.cache
        },
        services: {
            url: "/telecom/homeDashboard/services",
            serviceType: "aapi",
            method: "GET",
            isArray: false,
            cache: OvhApiTelecomHomeDashboard.cache
        }
    });
});
