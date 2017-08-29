angular.module("ovh-api-services").service("OvhApiPackXdslSiteBuilderStart", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslSiteBuilderStart");

    return {
        Lexi: function () {
            return $injector.get("OvhApiPackXdslSiteBuilderStartLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
