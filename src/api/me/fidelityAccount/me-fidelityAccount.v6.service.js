angular.module("ovh-api-services").service("OvhApiMeFidelityAccountV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeFidelityAccountV6");

    var userFidelityResource = $resource("/me/fidelityAccount", {}, {
        get: {
            method: "GET",
            cache: cache
        }
    });

    userFidelityResource.resetCache = function () {
        cache.removeAll();
    };

    return userFidelityResource;
});
