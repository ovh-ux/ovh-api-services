angular.module("ovh-api-services").service("OvhApiPackXdslVoipLine", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslVoipLine");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslVoipLineAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiPackXdslVoipLineLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiPackXdslVoipLineErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
