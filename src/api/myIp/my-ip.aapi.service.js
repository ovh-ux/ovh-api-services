angular.module("ovh-api-services").service("OvhApiMyIpAapi", function ($resource) {
    "use strict";

    return $resource("/myIp", {}, {
        get: {
            serviceType: "aapi",
            isArray: true
        }
    });
});
