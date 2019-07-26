angular.module("ovh-api-services").service("OvhApiPackXdslVoipLine", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslVoipLine");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslVoipLineAapi");
        },
        v6: function () {
            return $injector.get("OvhApiPackXdslVoipLineV6");
        },
        v7: function () {
            return $injector.get("OvhApiPackXdslVoipLineV7");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
