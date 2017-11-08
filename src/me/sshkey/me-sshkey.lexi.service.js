angular.module("ovh-api-services").service("OvhApiMeSshKeyLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeSshKeyLexi");

    var userSshResource = $resource("/me/sshKey", {}, {
        get: { method: "GET", cache: cache }
    });

    userSshResource.resetCache = function () {
        cache.removeAll();
    };
    return userSshResource;
});
