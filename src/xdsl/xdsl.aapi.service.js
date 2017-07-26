angular.module("ovh-api-services").service("XdslAapi", function ($resource, Xdsl) {
    "use strict";

    var xdslAapi = $resource("/xdsl/:serviceName/statistics/:type/period/:period", {
        xdslId: "@xdslId",
        type: "@type",
        period: "@period"
    }, {
        statistics: {
            method: "GET",
            serviceType: "aapi",
            cache: Xdsl.cache
        }
    }
    );

    return xdslAapi;
});
