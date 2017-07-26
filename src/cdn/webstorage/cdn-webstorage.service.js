angular.module("ovh-api-services").service("CdnWebstorage", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("CdnWebstorage");

    return {
        Lexi: function () {
            return $injector.get("CdnWebstorageLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
