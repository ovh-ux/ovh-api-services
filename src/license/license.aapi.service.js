angular.module("ovh-api-services").service("OvhApiLicenseAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiLicenseAapi");

    var licenses = $resource("/sws/license", {}, {
        get: {
            method: "GET",
            url: "/sws/license?filterType",
            serviceType: "aapi",
            cache: cache,
            isArray: false,
            params: {
                count: "@count",
                offset: "@offset"
            }
        }
    });

    licenses.resetCache = function () {
        cache.removeAll();
    };

    return licenses;
});
