angular.module("ovh-api-services").service("OvhApiPackXdslDomainActivation", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslDomainActivation");

    return {
        v6: function () {
            return $injector.get("OvhApiPackXdslDomainActivationV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiPackXdslDomainActivationAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
