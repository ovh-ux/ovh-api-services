angular.module("ovh-api-services").service("OvhApiCdnWebstorage", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCdnWebstorage");

    return {
        v6: function () {
            return $injector.get("OvhApiCdnWebstorageV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
