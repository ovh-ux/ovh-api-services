angular.module("ovh-api-services").service("OvhApiCdnWebsiteV6", function ($resource, $q, OvhApiCdnWebsite) {
    "use strict";

    return $resource("/cdn/website/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: OvhApiCdnWebsite.cache
        },
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiCdnWebsite.cache
        }
    });
});
