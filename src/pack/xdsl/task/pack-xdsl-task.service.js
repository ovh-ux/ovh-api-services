angular.module("ovh-api-services").service("PackXdslTask", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslTask");

    return {
        Aapi: function () {
            return $injector.get("PackXdslTaskAapi");
        },
        Lexi: function () {
            return $injector.get("PackXdslTaskLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
