angular
    .module("ovh-api-services")
    .service("OvhApiSupportIceberg", function (iceberg) {
        "use strict";

        var alertResource = iceberg("/support/tickets");

        return alertResource;
    });
