angular.module("ovh-api-services").service("ServicesAapi", function ($resource) {
    "use strict";

    return $resource("/services", {}, {
        get: {
            serviceType: "aapi"
        }
    });
});
