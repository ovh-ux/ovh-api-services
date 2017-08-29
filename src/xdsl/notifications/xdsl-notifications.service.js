angular.module("ovh-api-services").service("OvhApiXdslNotifications", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslNotifications");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslNotificationsLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslNotificationsAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
