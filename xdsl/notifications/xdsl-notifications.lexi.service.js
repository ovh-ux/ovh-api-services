angular.module("ovh-api-services").service("XdslNotificationsLexi", function ($resource, XdslNotifications) {
    "use strict";

    var interceptor = {
        response: function (response) {
            XdslNotifications.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/monitoringNotifications", {
        xdslId: "@xdslId",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: XdslNotifications.cache
        },
        add: {
            method: "POST",
            interceptor: interceptor
        },
        remove: {
            url: "/xdsl/:xdslId/monitoringNotifications/:id",
            method: "DELETE",
            interceptor: interceptor
        },
        update: {
            url: "/xdsl/:xdslId/monitoringNotifications/:id",
            method: "PUT",
            interceptor: interceptor
        }
    });
});
