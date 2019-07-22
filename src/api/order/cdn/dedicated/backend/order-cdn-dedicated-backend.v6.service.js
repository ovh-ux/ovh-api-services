angular.module("ovh-api-services").service("OvhApiOrderCdnDedicatedBackendV6", function ($resource) {
    "use strict";

    return $resource("/order/cdn/dedicated/:serviceName/backend/:duration", {
        serviceName: "@serviceName",
        duration: "@duration"
    });
});
