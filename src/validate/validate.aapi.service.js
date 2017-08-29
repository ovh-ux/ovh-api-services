angular.module("ovh-api-services").service("OvhApiValidateAapi", function ($resource) {
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
