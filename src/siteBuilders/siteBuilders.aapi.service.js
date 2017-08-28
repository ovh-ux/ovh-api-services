angular.module("ovh-api-services").service("OvhApiSiteBuildersAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiSiteBuildersAapi");

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
