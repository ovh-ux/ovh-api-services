angular.module("ovh-api-services").service("OvhApiOrderSms", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiOrderSms");

    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderSmsLexi");
        },
        cache: cache
    };
});
