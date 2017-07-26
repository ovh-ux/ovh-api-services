angular.module("ovh-api-services").service("XdslNotifications", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslNotifications");

    return {
        Lexi: function () {
            return $injector.get("XdslNotificationsLexi");
        },
        Aapi: function () {
            return $injector.get("XdslNotificationsAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
