angular.module("ovh-api-services").service("OvhApiUserOvhAccountAapi", function ($resource) {
    "use strict";

    return $resource("/me/ovhAccount/all", {}, {
        info: {
            method: "GET",
            serviceType: "aapi",
            isArray: true
        }
    });
});
