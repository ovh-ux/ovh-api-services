angular.module("ovh-api-services").service("OvhApiXdslSpare", function ($injector, $cacheFactory) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiXdslSpareV6");
        },
        resetCache: function () {
            cache.removeAll();
        }
    };
});
