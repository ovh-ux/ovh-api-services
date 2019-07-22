angular.module("ovh-api-services").service("OvhApiTelecomSidebarAapi", function ($resource, OvhApiTelecomSidebar) {
    "use strict";

    var telecomSidebar = $resource("/telecom/sidebar", {}, {
        get: {
            method: "GET",
            url: "/telecom/sidebar",
            serviceType: "aapi",
            cache: OvhApiTelecomSidebar.cache
        },
        count: {
            method: "GET",
            url: "/telecom/sidebar/count",
            serviceType: "aapi",
            cache: OvhApiTelecomSidebar.cache
        }
    });

    return telecomSidebar;
});
