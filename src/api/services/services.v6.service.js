angular.module("ovh-api-services").service("OvhApiServicesV6", function ($resource) {
    "use strict";

    return $resource("/services/:serviceId", {
        serviceId: "@serviceId"
    });

});
