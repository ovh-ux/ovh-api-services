angular.module("ovh-api-services").service("OvhApiXdsl", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdsl");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslAapi");
        },
        v7: function () {
            return $injector.get("OvhApiXdslV7");
        },
        Email: function () {
            return $injector.get("OvhApiXdslEmail");
        },
        Incident: function () {
            return $injector.get("OvhApiXdslIncident");
        },
        Lines: function () {
            return $injector.get("OvhApiXdslLines");
        },
        Modem: function () {
            return $injector.get("OvhApiXdslModem");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
