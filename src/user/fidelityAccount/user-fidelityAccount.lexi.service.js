angular.module("ovh-api-services").service("UserFidelityAccountLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("UserFidelityAccountLexi");

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
