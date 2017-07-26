angular.module("ovh-api-services").service("CdnWebsite", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("CdnWebsite");

    return {
        Lexi: function () {
            return $injector.get("CdnWebsiteLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
