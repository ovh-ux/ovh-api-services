angular.module("ovh-api-services").service("OvhApiXdslLinesLexi", function ($resource, OvhApiXdslLines) {
    "use strict";

    return $resource("/xdsl/:xdslId/lines/:number", {
        xdslId: "@xdslId",
        number: "@number"
    }, {
        getStatistics: {
            method: "GET",
            url: "/xdsl/:xdslId/lines/:number/statistics",
            cache: OvhApiXdslLines.cache
        }
    });
}
);
