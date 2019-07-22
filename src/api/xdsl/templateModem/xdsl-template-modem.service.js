angular.module("ovh-api-services").service("OvhApiXdslTemplateModem", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslTemplateModem");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslTemplateModemV6");
        },
        resetCache: function () {
            cache.removeAll();
        },
        cache: cache
    };
});
