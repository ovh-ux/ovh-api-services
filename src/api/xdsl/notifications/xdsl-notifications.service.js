angular.module("ovh-api-services").service("OvhApiXdslNotifications", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslNotifications");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslNotificationsV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslNotificationsAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
