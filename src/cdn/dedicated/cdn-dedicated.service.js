angular.module("ovh-api-services").service("OvhApiCdnDedicated", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCdnDedicated");

    return {
        v6: function () {
            return $injector.get("OvhApiCdnDedicatedV6");
        },
        Ssl: function () {
            return $injector.get("OvhApiCdnDedicatedSsl");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
