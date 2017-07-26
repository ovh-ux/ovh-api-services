angular.module("ovh-api-services").service("SiteBuildersAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("SiteBuildersAapi");

    var siteBuildersResource = $resource("/sitebuilders", {
    }, {
        get: {
            method: "GET",
            isArray: true,
            universe: "@universe",
            serviceType: "aapi"
        }
    });

    siteBuildersResource.resetAllCache = function () {
        siteBuildersResource.resetCache();
    };

    siteBuildersResource.resetCache = function () {
        cache.removeAll();
    };

    return siteBuildersResource;
});
