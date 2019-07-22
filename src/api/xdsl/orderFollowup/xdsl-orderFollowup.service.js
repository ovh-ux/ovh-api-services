angular.module("ovh-api-services").service("OvhApiXdslOrderFollowup", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslOrderFollowup");

    return {
        Aapi: function () {
            return $injector.get("OvhApiXdslOrderFollowupAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
