angular.module("ovh-api-services").service("FreeFax", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("FreeFax");

    return {
        Lexi: function () {
            return $injector.get("FreeFaxLexi");
        },
        Aapi: function () {
            return $injector.get("FreeFaxAapi");
        },
        Erika: function () {
            return $injector.get("FreeFaxErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
