angular.module("ovh-api-services").service("OvhApiCloudProjectInstanceInterface", function ($injector, $cacheFactory) {

    "use strict";
    var cache = $cacheFactory("OvhApiCloudProjectInstanceInterface");

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectInstanceInterfaceV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };

});
