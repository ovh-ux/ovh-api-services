angular.module("ovh-api-services").service("OvhApiCloudProjectBillV6", function ($resource) {
    "use strict";

    return $resource("/cloud/project/:serviceName/bill", {
        serviceName: "@serviceName",
        from: "@from",
        to: "@to"
    });
});
