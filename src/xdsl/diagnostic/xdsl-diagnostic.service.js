/* global angular*/
angular.module("ovh-api-services").service("XdslDiagnostic", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslDiagnostic");

    return {
        Lexi: function () {
            return $injector.get("XdslDiagnosticLexi");
        },
        Aapi: function () {
            return $injector.get("XdslDiagnosticAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
