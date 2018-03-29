angular.module("ovh-api-services").service("OvhApiCdnDedicated", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCdnDedicated");

    return {
        v6: function () {
            return $injector.get("OvhApiCdnDedicatedV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
