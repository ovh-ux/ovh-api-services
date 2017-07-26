angular.module("ovh-api-services").service("XdslModemPort", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslModemPort");

    return {
        Lexi: function () {
            return $injector.get("XdslModemPortLexi");
        },
        Aapi: function () {
            return $injector.get("XdslModemPortAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
