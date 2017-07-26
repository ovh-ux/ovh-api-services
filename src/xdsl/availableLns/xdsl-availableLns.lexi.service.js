angular.module("ovh-api-services").service("XdslAvailableLnsLexi", function ($resource, XdslAvailableLns) {
    "use strict";

    return $resource("/xdsl/:xdslId/availableLns", {
        xdslId: "@xdslId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: XdslAvailableLns.cache
        }
    });
});
