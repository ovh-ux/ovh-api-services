angular.module("ovh-api-services").service("OvhApiFreeFax", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiFreeFax");

    return {
        Lexi: function () {
            return $injector.get("OvhApiFreeFaxLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiFreeFaxAapi");
        },
        Erika: function () {
            return $injector.get("OvhApiFreeFaxErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
