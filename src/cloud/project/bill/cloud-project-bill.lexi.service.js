angular.module("ovh-api-services").service("OvhApiCloudProjectBillLexi", function ($resource) {
    "use strict";

    return $resource("/cloud/project/:serviceName/bill", {
        serviceName: "@serviceName",
        from: "@from",
        to: "@to"
    });
});
