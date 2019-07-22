angular.module("ovh-api-services").service("OvhApiServicesAapi", function ($resource) {
    "use strict";

    return $resource("/services", {}, {
        get: {
            isArray: true,
            serviceType: "aapi"
        }
    });
});
