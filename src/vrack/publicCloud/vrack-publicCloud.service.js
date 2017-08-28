angular.module("ovh-api-services").service("OvhApiVrackPublicCloud", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiVrackPublicCloud");

    return {
        Lexi: function () {
            return $injector.get("OvhApiVrackPublicCloudLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
