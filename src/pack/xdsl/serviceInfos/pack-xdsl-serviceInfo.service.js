angular.module("ovh-api-services").service("OvhApiPackXdslServiceInfo", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslServiceInfo");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslServiceInfoAapi");
        },
        Lexi: angular.noop,
        resetCache: cache.removeAll,
        cache: cache
    };
});
