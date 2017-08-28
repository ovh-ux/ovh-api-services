angular.module("ovh-api-services").service("OvhApiMeFidelityAccountLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeFidelityAccountLexi");

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
