angular.module("ovh-api-services").service("CloudProjectInstance", function ($injector, $cacheFactory) {

    "use strict";
    var cache = $cacheFactory("CloudProjectInstance");

    return {
        Lexi: function () {
            return $injector.get("CloudProjectInstanceLexi");
        },
        Aapi: function () {
            return $injector.get("CloudProjectInstanceAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };

});
