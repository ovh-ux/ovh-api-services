angular.module("ovh-api-services").service("OvhApiPackXdslVoipBillingAccount", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslVoipBillingAccount");

    return {
        Lexi: function () {
            return $injector.get("OvhApiPackXdslVoipBillingAccountLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
