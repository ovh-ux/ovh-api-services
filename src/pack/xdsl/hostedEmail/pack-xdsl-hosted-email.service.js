"use strict";

angular.module("ovh-api-services").service("PackXdslHostedEmail", function ($injector, $cacheFactory) {

    var cache = $cacheFactory("PackXdslHostedEmail");

    return {
        Lexi: function () {
            return $injector.get("PackXdslHostedEmailLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
