angular.module("ovh-api-services").service("OvhApiCdnDedicatedSslV6", function ($resource) {
    "use strict";

    return $resource("/cdn/dedicated/:serviceName/ssl", {
        serviceName: "@serviceName"
    });
});
