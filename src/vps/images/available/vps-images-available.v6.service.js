angular.module("ovh-api-services").service("OvhApiVpsImagesAvailableV6", function ($resource) {
    "use strict";

    return $resource("/vps/:serviceName/images/available", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", isArray: true },
        get: { method: "GET", url: "/vps/:serviceName/images/available/:id" }
    });
});
