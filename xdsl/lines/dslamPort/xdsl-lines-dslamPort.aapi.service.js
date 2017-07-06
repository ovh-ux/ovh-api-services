angular.module("ovh-api-services").service("XdslLinesDslamPortAapi", function ($resource, XdslLinesDslamPort) {
    "use strict";

    var xdslLinesDslamPortAapi = $resource("/xdsl/:xdslId/lines/:number/dslamPort", {
        xdslId: "@xdslId",
        number: "@number"
    }, {
        getProfiles: {
            method: "GET",
            url: "/xdsl/:xdslId/lines/:number/dslamPort/availableProfiles",
            isArray: true,
            serviceType: "aapi",
            cache: XdslLinesDslamPort.cache
        }
    }
    );

    return xdslLinesDslamPortAapi;
});
