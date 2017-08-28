angular.module("ovh-api-services").service("OvhApiPackXdslExchangeAccount", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslExchangeAccount");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslExchangeAccountAapi");
        },
        Services: function () {
            return $injector.get("OvhApiPackXdslExchangeAccountServices");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
