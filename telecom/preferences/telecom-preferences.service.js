angular.module("ovh-api-services").service("TelecomPreferences", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelecomPreferences");

    return {
        Aapi: function () {
            return $injector.get("TelecomPreferencesAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
