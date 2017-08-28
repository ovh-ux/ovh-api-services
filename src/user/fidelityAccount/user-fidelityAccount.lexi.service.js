angular.module("ovh-api-services").service("OvhApiUserFidelityAccountLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiUserFidelityAccountLexi");

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
