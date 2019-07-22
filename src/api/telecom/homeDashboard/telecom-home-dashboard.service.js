angular.module("ovh-api-services").service("OvhApiTelecomHomeDashboard", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelecomHomeDashboard");

    return {
        Aapi: function () {
            return $injector.get("OvhApiTelecomHomeDashboardAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
