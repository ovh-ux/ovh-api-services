angular.module("ovh-api-services").service("OvhApiUserBillAapi", function ($resource) {
    "use strict";

    return $resource("/me/bill", {}, {
        last: {
            method: "GET",
            url: "/me/bill/last",
            serviceType: "aapi",
            isArray: true
        }
    });
});
