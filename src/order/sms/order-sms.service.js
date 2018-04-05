angular.module("ovh-api-services").service("OvhApiOrderSms", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiOrderSms");

    return {
        v6: function () {
            return $injector.get("OvhApiOrderSmsV6");
        },
        cache: cache
    };
});
