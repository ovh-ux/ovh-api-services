angular.module("ovh-api-services").service("OvhApiCdnWebsite", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCdnWebsite");

    return {
        v6: function () {
            return $injector.get("OvhApiCdnWebsiteV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
