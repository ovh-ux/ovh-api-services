angular.module("ovh-api-services").service("XdslNotificationsAapi", function ($resource, XdslNotifications) {
    "use strict";

    var xdslNotificationsAapi = $resource("/xdsl/:xdslId/monitoringNotifications", {
        xdslId: "@xdslId"
    }, {
        list: {
            method: "GET",
            serviceType: "aapi",
            isArray: true,
            cache: XdslNotifications.cache
        }
    });

    return xdslNotificationsAapi;
});
