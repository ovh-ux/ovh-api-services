angular.module("ovh-api-services").service("OverTheBox", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OverTheBox");

    return {
        Lexi: function () {
            return $injector.get("OverTheBoxLexi");
        },
        Aapi: function () {
            return $injector.get("OverTheBoxAapi");
        },
        Erika: function () {
            return $injector.get("OverTheBoxErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
