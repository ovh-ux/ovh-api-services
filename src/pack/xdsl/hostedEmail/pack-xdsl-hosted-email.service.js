"use strict";

angular.module("ovh-api-services").service("OvhApiPackXdslHostedEmail", function ($injector, $cacheFactory) {

    var cache = $cacheFactory("OvhApiPackXdslHostedEmail");

    return {
        Lexi: function () {
            return $injector.get("OvhApiPackXdslHostedEmailLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
