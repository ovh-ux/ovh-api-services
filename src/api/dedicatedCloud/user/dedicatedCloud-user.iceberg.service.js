angular
    .module("ovh-api-services")
    .service("OvhApiDedicatedCloudUserIceberg", function (iceberg) {
        "use strict";

        var userResource = iceberg("/dedicatedCloud/:serviceName/user/", {
            serviceName: "@serviceName"
        });

        return userResource;
    });
