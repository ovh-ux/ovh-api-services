angular.module("ovh-api-services").service("OvhApiPackXdslVoipBillingAccount", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslVoipBillingAccount");

    return {
        v6: function () {
            return $injector.get("OvhApiPackXdslVoipBillingAccountV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
