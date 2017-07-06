angular.module("ovh-api-services").service("XdslLinesLexi", function ($resource, XdslLines) {
    "use strict";

    return $resource("/xdsl/:xdslId/lines/:number",
                     {
                         xdslId: "@xdslId",
                         number: "@number"
                     }, {
                         getStatistics: {
                             method: "GET",
                             url: "/xdsl/:xdslId/lines/:number/statistics",
                             cache: XdslLines.cache
                         }
                     });
}
);
