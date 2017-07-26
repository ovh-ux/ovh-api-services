angular.module("ovh-api-services").service("NewAccountCreationRules", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("NewAccountCreationRulesLexi");

    return {
        Lexi: function () {
            return $injector.get("NewAccountCreationRulesLexi");
        },
        cache: cache,
        resetCache: cache.removeAll
    };
});
