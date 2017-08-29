angular.module("ovh-api-services").service("OvhApiTelecomSidebar", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelecomSidebar");

    return {
        Aapi: function () {
            return $injector.get("OvhApiTelecomSidebarAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
