angular.module("ovh-api-services").service("OvhApiPortalRadarServerAapi", function ($resource, OvhApiPortalRadarServer) {
    "use strict";

    return $resource("/dedicated/server/radar/aggregate", {}, {
        aggregate: {
            method: "GET",
            serviceType: "aapi",
            isArray: true,
            cache: OvhApiPortalRadarServer.cache
        }
    });
});
