angular.module("ovh-api-services").service("PortalRadarServerAapi", function ($resource, PortalRadarServer) {
    "use strict";

    return $resource("/dedicated/server/radar/aggregate", {}, {
        aggregate: {
            method: "GET",
            serviceType: "aapi",
            isArray: true,
            cache: PortalRadarServer.cache
        }
    });
});
