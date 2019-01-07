angular.module("ovh-api-services").service("OvhApiXdslModemIpsecAlg", function ($cacheFactory, $injector) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemIpsecAlg");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemIpsecAlgV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
