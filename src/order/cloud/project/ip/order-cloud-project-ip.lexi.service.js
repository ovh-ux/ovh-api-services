angular.module("ovh-api-services").service("OvhApiOrderCloudProjectIpLexi", function ($resource) {
    "use strict";

    return $resource("/order/cloud/project/:serviceName/ip", {
        serviceName: "@serviceName",
        country: "@country",
        instanceId: "@instanceId",
        quantity: "@quantity"
    }, {
        get: { method: "GET" },
        buy: { method: "POST" }
    });
});
