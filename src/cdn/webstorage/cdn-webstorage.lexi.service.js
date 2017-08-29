angular.module("ovh-api-services").service("OvhApiCdnWebstorageLexi", function ($resource, $q, OvhApiCdnWebstorage) {
    "use strict";

    return $resource("/cdn/webstorage/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: OvhApiCdnWebstorage.cache
        },
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiCdnWebstorage.cache
        }
    });
});
