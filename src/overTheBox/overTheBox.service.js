angular.module("ovh-api-services").service("OvhApiOverTheBox", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiOverTheBox");

    return {
        Lexi: function () {
            return $injector.get("OvhApiOverTheBoxLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiOverTheBoxAapi");
        },
        Erika: function () {
            return $injector.get("OvhApiOverTheBoxErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
