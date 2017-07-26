angular.module("ovh-api-services").service("TelecomHomeDashboard", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelecomHomeDashboard");

    return {
        Aapi: function () {
            return $injector.get("TelecomHomeDashboardAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
