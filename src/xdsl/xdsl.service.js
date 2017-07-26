angular.module("ovh-api-services").service("Xdsl", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("Xdsl");

    return {
        Lexi: function () {
            return $injector.get("XdslLexi");
        },
        Aapi: function () {
            return $injector.get("XdslAapi");
        },
        Erika: function () {
            return $injector.get("XdslErika");
        },
        Lines: function () {
            return $injector.get("XdslLines");
        },
        Modem: function () {
            return $injector.get("XdslModem");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
