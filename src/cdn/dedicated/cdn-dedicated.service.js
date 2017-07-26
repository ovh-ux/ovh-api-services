angular.module("ovh-api-services").service("CdnDedicated", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("CdnDedicated");

    return {
        Lexi: function () {
            return $injector.get("CdnDedicatedLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
