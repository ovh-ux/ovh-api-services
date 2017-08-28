angular.module("ovh-api-services").service("OvhApiServicesAapi", function ($resource) {
    "use strict";

    return $resource("/services", {}, {
        get: {
            serviceType: "aapi"
        }
    });
});
