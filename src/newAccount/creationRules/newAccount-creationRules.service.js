angular.module("ovh-api-services").service("OvhApiNewAccountCreationRules", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiNewAccountCreationRulesLexi");

    return {
        Lexi: function () {
            return $injector.get("OvhApiNewAccountCreationRulesLexi");
        },
        cache: cache,
        resetCache: cache.removeAll
    };
});
