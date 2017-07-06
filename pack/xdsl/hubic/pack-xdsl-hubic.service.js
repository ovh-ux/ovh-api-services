angular.module("ovh-api-services").service("PackXdslHubic", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslHubic");

    return {
        Aapi: function () {
            return $injector.get("PackXdslHubicAapi");
        },
        Lexi: angular.noop,
        resetCache: cache.removeAll,
        cache: cache
    };
});
