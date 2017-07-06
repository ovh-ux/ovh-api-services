angular.module("ovh-api-services").service("DedicatedCephUserAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DedicatedCephUserAapi");

    var resource = $resource("/dedicated/ceph/:serviceName/user", {
        serviceName: "@serviceName"
    }, {
        users: {
            url: "/dedicated/ceph/:serviceName/user",
            method: "GET",
            cache: cache,
            serviceType: "aapi",
            isArray: true
        }
    });

    resource.resetAllCache = function () {
        resource.resetCache();
    };

    resource.resetCache = function () {
        cache.removeAll();
    };

    return resource;
});
