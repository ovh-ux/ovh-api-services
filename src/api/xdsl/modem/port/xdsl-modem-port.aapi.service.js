angular.module("ovh-api-services").service("OvhApiXdslModemPortAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemPortAapi");

    var xdslModemPortAapi = $resource("/xdsl/:xdslId/modem/portMappings", {
        xdslId: "@xdslId"
    }, {
        query: {
            serviceType: "aapi",
            isArray: true,
            cache: cache
        }
    });

    xdslModemPortAapi.resetCache = function () {
        cache.removeAll();
    };

    return xdslModemPortAapi;
});
