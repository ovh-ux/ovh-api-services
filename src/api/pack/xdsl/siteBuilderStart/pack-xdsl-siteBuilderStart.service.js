angular.module("ovh-api-services").service("OvhApiPackXdslSiteBuilderStart", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslSiteBuilderStart");

    return {
        v6: function () {
            return $injector.get("OvhApiPackXdslSiteBuilderStartV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
