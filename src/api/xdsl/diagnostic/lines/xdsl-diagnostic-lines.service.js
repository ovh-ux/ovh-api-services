angular.module("ovh-api-services").service("OvhApiXdslDiagnosticLines", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslDiagnosticLines");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslDiagnosticLinesV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
