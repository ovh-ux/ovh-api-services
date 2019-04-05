angular.module("ovh-api-services").service("OvhApiUniversesAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiUniversesAapi");

    var universesResource = $resource("/universes", {
    }, {
        query: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: cache
        }
    });

    universesResource.resetCache = function () {
        cache.removeAll();
    };

    return universesResource;
});
