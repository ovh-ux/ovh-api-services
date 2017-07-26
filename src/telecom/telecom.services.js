angular.module("ovh-api-services").service("Telecom", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("Telecom");

    return {
        resetCache: cache.removeAll,
        cache: cache,
        HomeDashboard: function () {
            return $injector.get("TelecomHomeDashboard");
        },
        Preferences: function () {
            return $injector.get("TelecomPreferences");
        }
    };
});
