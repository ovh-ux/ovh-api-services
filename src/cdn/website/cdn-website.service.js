angular.module("ovh-api-services").service("OvhApiCdnWebsite", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCdnWebsite");

    return {
        Lexi: function () {
            return $injector.get("OvhApiCdnWebsiteLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
