angular.module("ovh-api-services").service("PackXdslDomainActivation", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslDomainActivation");

    return {
        Lexi: function () {
            return $injector.get("PackXdslDomainActivationLexi");
        },
        Aapi: function () {
            return $injector.get("PackXdslDomainActivationAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
