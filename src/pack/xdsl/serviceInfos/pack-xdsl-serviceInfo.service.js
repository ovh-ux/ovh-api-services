angular.module("ovh-api-services").service("PackXdslServiceInfo", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslServiceInfo");

    return {
        Aapi: function () {
            return $injector.get("PackXdslServiceInfoAapi");
        },
        Lexi: angular.noop,
        resetCache: cache.removeAll,
        cache: cache
    };
});
