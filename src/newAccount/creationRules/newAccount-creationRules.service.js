angular.module("ovh-api-services").service("OvhApiNewAccountCreationRules", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiNewAccountCreationRulesV6");

    return {
        v6: function () {
            return $injector.get("OvhApiNewAccountCreationRulesV6");
        },
        cache: cache,
        resetCache: cache.removeAll
    };
});
