angular.module("ovh-api-services").service("OvhApiXdslDiagnostic", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslDiagnostic");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslDiagnosticLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslDiagnosticAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
