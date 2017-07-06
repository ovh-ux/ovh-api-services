angular.module("ovh-api-services").service("VpsAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("VpsAapi");

    var vpsResource = $resource("/vps/:serviceName", {
        serviceName: "@serviceName"
    }, {
        summary: {
            url: "/vps/:serviceName/summary",
            method: "GET",
            cache: cache,
            serviceType: "aapi"
        }
    });

    vpsResource.resetAllCache = function () {
        vpsResource.resetCache();
    };

    vpsResource.resetCache = function () {
        cache.removeAll();
    };

    return vpsResource;
});
