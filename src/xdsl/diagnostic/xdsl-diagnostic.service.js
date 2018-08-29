angular.module("ovh-api-services").service("OvhApiXdslDiagnostic", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslDiagnostic");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslDiagnosticV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslDiagnosticAapi");
        },
        Lines: function () {
            return $injector.get("OvhApiXdslDiagnosticLines");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
