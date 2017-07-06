angular.module("ovh-api-services").service("OrderSms", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OrderSms");

    return {
        Lexi: function () {
            return $injector.get("OrderSmsLexi");
        },
        cache: cache
    };
});
