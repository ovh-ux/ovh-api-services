angular.module("ovh-api-services").service("FreeFaxAapi", function ($resource, $cacheFactory, FreeFax) {
    "use strict";

    var interceptor = {
        response: function (response) {
            FreeFax.resetCache();
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
            cache: FreeFax.cache
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
            cache: FreeFax.cache
        }
    });

    return freeFaxAapi;
});
