angular.module("ovh-api-services").service("XdslOrderFollowup", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslOrderFollowup");

    return {
        Aapi: function () {
            return $injector.get("XdslOrderFollowupAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
