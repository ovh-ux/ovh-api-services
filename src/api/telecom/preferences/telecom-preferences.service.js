angular.module("ovh-api-services").service("OvhApiTelecomPreferences", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelecomPreferences");

    return {
        Aapi: function () {
            return $injector.get("OvhApiTelecomPreferencesAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
