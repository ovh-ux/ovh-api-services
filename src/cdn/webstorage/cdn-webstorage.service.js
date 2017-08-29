angular.module("ovh-api-services").service("OvhApiCdnWebstorage", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCdnWebstorage");

    return {
        Lexi: function () {
            return $injector.get("OvhApiCdnWebstorageLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
