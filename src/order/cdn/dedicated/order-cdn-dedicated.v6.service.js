angular.module("ovh-api-services").service("OvhApiOrderCdnDedicatedV6", function ($resource) {
    "use strict";

    return $resource("/order/cdn/dedicated/:serviceName", {
        serviceName: "@serviceName"
    });
});
