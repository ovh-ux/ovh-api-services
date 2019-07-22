angular.module("ovh-api-services").service("OvhApiTelephonyFaxAapi", function ($resource) {
    "use strict";

    var fax = $resource("/fax", {}, {
        getServices: {
            method: "GET",
            url: "/fax",
            serviceType: "aapi",
            isArray: true
        }
    });

    return fax;
});
