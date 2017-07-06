angular.module("ovh-api-services").service("CdnWebsiteLexi", function ($resource, $q, CdnWebsite) {
    "use strict";

    return $resource("/cdn/website/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: CdnWebsite.cache
        },
        query: {
            method: "GET",
            isArray: true,
            cache: CdnWebsite.cache
        }
    });
});
