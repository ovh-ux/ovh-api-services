angular.module("ovh-api-services").service("OvhApiServiceAapi", function ($resource) {
    "use strict";

    return $resource("/service", {}, {
        query: {
            isArray: true,
            serviceType: "aapi"
        }
    });
});
