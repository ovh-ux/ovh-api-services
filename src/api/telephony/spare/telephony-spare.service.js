angular.module("ovh-api-services").service("OvhApiTelephonySpare", function ($injector, $cacheFactory) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonySpareV6");
        },
        resetCache: function () {
            cache.removeAll();
        }
    };
});
