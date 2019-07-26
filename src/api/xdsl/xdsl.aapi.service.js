angular.module("ovh-api-services").service("OvhApiXdslAapi", function ($resource, OvhApiXdsl) {
    "use strict";

    var xdslAapi = $resource("/xdsl/:serviceName/statistics/:type/period/:period", {
        xdslId: "@xdslId",
        type: "@type",
        period: "@period"
    }, {
        statistics: {
            method: "GET",
            serviceType: "aapi",
            cache: OvhApiXdsl.cache
        }
    }
    );

    return xdslAapi;
});
