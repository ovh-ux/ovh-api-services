angular.module("ovh-api-services").service("PackXdslExchangeAccount", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslExchangeAccount");

    return {
        Aapi: function () {
            return $injector.get("PackXdslExchangeAccountAapi");
        },
        Services: function () {
            return $injector.get("PackXdslExchangeAccountServices");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
