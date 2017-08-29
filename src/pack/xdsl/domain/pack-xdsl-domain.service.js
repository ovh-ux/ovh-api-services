angular.module("ovh-api-services").service("OvhApiPackXdslDomainActivation", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslDomainActivation");

    return {
        Lexi: function () {
            return $injector.get("OvhApiPackXdslDomainActivationLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiPackXdslDomainActivationAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
