angular.module("ovh-api-services").service("VrackPublicCloud", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("VrackPublicCloud");

    return {
        Lexi: function () {
            return $injector.get("VrackPublicCloudLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
