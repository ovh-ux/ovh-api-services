angular.module("ovh-api-services").service("ValidateAapi", function ($resource) {
    "use strict";

    return $resource("/validate", {}, {
        phone: {
            url: "/validate/phone/:regionCode/:phoneNumber",
            method: "GET",
            serviceType: "aapi",
            isArray: false
        }
    });
});
