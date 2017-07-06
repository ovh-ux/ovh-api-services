angular.module("ovh-api-services").service("PackXdslVoipLine", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslVoipLine");

    return {
        Aapi: function () {
            return $injector.get("PackXdslVoipLineAapi");
        },
        Lexi: function () {
            return $injector.get("PackXdslVoipLineLexi");
        },
        Erika: function () {
            return $injector.get("PackXdslVoipLineErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
