angular.module("ovh-api-services").service("TelecomHomeDashboardAapi", function ($resource, TelecomHomeDashboard) {
    "use strict";

    return $resource("/telecom/homeDashboard", {}, {
        get: {
            method: "GET",
            serviceType: "aapi",
            isArray: false,
            cache: TelecomHomeDashboard.cache
        },
        incidents: {
            url: "/telecom/homeDashboard/incidents",
            serviceType: "aapi",
            method: "GET",
            isArray: false,
            cache: TelecomHomeDashboard.cache
        },
        services: {
            url: "/telecom/homeDashboard/services",
            serviceType: "aapi",
            method: "GET",
            isArray: false,
            cache: TelecomHomeDashboard.cache
        }
    });
});
