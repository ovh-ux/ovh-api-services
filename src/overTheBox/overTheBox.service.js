angular.module("ovh-api-services").service("OvhApiOverTheBox", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiOverTheBox");

    return {
        v6: function () {
            return $injector.get("OvhApiOverTheBoxV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiOverTheBoxAapi");
        },
        v7: function () {
            return $injector.get("OvhApiOverTheBoxV7");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
