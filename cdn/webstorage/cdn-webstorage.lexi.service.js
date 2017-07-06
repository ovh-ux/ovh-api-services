angular.module("ovh-api-services").service("CdnWebstorageLexi", function ($resource, $q, CdnWebstorage) {
    "use strict";

    return $resource("/cdn/webstorage/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: CdnWebstorage.cache
        },
        query: {
            method: "GET",
            isArray: true,
            cache: CdnWebstorage.cache
        }
    });
});
