angular.module("ovh-api-services").service("TelecomSidebar", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelecomSidebar");

    return {
        Aapi: function () {
            return $injector.get("TelecomSidebarAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
