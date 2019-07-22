angular.module("ovh-api-services").service("OvhApiVrackPublicCloud", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiVrackPublicCloud");

    return {
        v6: function () {
            return $injector.get("OvhApiVrackPublicCloudV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
