"use strict";

angular.module("ovh-api-services").service("OvhApiPackXdslHostedEmail", function ($injector, $cacheFactory) {

    var cache = $cacheFactory("OvhApiPackXdslHostedEmail");

    return {
        v6: function () {
            return $injector.get("OvhApiPackXdslHostedEmailV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
