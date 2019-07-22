angular.module("ovh-api-services").service("OvhApiXdslNotificationsAapi", function ($resource, OvhApiXdslNotifications) {
    "use strict";

    var xdslNotificationsAapi = $resource("/xdsl/:xdslId/monitoringNotifications", {
        xdslId: "@xdslId"
    }, {
        list: {
            method: "GET",
            serviceType: "aapi",
            isArray: true,
            cache: OvhApiXdslNotifications.cache
        }
    });

    return xdslNotificationsAapi;
});
