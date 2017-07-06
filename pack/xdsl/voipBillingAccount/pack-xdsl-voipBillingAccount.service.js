angular.module("ovh-api-services").service("PackXdslVoipBillingAccount", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslVoipBillingAccount");

    return {
        Lexi: function () {
            return $injector.get("PackXdslVoipBillingAccountLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
