angular.module("ovh-api-services").service("OvhApiXdslModemContentSharing", function ($cacheFactory, $injector) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemContentSharing");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemContentSharingV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
