angular.module("ovh-api-services").service("PackXdslSiteBuilderStart", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslSiteBuilderStart");

    return {
        Lexi: function () {
            return $injector.get("PackXdslSiteBuilderStartLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
