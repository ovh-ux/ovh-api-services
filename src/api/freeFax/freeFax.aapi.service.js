angular.module("ovh-api-services").service("OvhApiFreeFaxAapi", function ($resource, $cacheFactory, OvhApiFreeFax) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiFreeFax.resetCache();
            return response.resource;
        }
    };

    var freeFaxAapi = $resource("/freefax/:serviceName", {
        serviceName: "@serviceName"
    }, {
        notifications: {
            method: "GET",
            url: "/freefax/notifications/:serviceName",
            serviceType: "aapi",
            isArray: true,
            cache: OvhApiFreeFax.cache
        },
        notificationsUpdate: {
            method: "PUT",
            url: "/freefax/notifications/:serviceName/update",
            serviceType: "aapi",
            interceptor: interceptor
        },
        details: {
            method: "GET",
            serviceType: "aapi",
            url: "/freefax/:serviceName/details",
            cache: OvhApiFreeFax.cache
        }
    });

    return freeFaxAapi;
});
