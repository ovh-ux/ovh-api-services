angular.module("ovh-api-services").service("OvhApiCloudProjectInstance", function ($injector, $cacheFactory) {

    "use strict";
    var cache = $cacheFactory("OvhApiCloudProjectInstance");

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectInstanceV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiCloudProjectInstanceAapi");
        },
        Interface: function () {
            return $injector.get("OvhApiCloudProjectInstanceInterface");
        },
        resetCache: cache.removeAll,
        cache: cache
    };

});
