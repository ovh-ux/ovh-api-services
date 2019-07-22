angular.module("ovh-api-services").service("OvhApiTelecom", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelecom");

    return {
        resetCache: cache.removeAll,
        cache: cache,
        HomeDashboard: function () {
            return $injector.get("OvhApiTelecomHomeDashboard");
        },
        Preferences: function () {
            return $injector.get("OvhApiTelecomPreferences");
        }
    };
});
