angular.module("ovh-api-services").service("MyIpAapi", function ($resource) {
    "use strict";

    return $resource("/myIp", {}, {
        get: {
            serviceType: "aapi",
            isArray: true
        }
    });
});
