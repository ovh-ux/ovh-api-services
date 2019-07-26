angular.module("ovh-api-services").service("OvhApiScreenshot", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiScreenshot");

    return {
        Aapi: function () {
            return $injector.get("OvhApiScreenshotAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
