angular.module("ovh-api-services").service("OvhApiXdslModemSipAlg", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemSipAlg");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemSipAlgV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
