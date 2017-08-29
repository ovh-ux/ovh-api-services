angular.module("ovh-api-services").service("OvhApiXdsl", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdsl");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslAapi");
        },
        Erika: function () {
            return $injector.get("OvhApiXdslErika");
        },
        Lines: function () {
            return $injector.get("OvhApiXdslLines");
        },
        Modem: function () {
            return $injector.get("OvhApiXdslModem");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
