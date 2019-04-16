angular.module("ovh-api-services").service("OvhApiXdslIncidentV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslIncidentV6");

    return $resource("/xdsl/:serviceName/incident", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: cache,
            isArray: false
        }
    });
});
