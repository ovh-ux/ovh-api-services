angular.module("ovh-api-services").service("TelecomSidebarAapi", function ($resource, TelecomSidebar) {
    "use strict";

    var telecomSidebar = $resource("/telecom/sidebar", {}, {
        get: {
            method: "GET",
            url: "/telecom/sidebar",
            serviceType: "aapi",
            cache: TelecomSidebar.cache
        },
        count: {
            method: "GET",
            url: "/telecom/sidebar/count",
            serviceType: "aapi",
            cache: TelecomSidebar.cache
        }
    });

    return telecomSidebar;
});
