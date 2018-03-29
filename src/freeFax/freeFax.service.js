angular.module("ovh-api-services").service("OvhApiFreeFax", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiFreeFax");

    return {
        v6: function () {
            return $injector.get("OvhApiFreeFaxV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiFreeFaxAapi");
        },
        v7: function () {
            return $injector.get("OvhApiFreeFaxV7");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
