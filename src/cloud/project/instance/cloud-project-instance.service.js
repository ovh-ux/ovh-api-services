angular.module("ovh-api-services").service("OvhApiCloudProjectInstance", function ($injector, $cacheFactory) {

    "use strict";
    var cache = $cacheFactory("OvhApiCloudProjectInstance");

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectInstanceLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiCloudProjectInstanceAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };

});
