angular.module("ovh-api-services").service("PackXdslHubicAapi", function ($resource, PackXdslHubic) {
    "use strict";

    return $resource("/pack/xdsl/:packId/hubic",
                     {
                         packId: "@packId"
                     }, {
                         query: {
                             serviceType: "aapi",
                             isArray: true,
                             cache: PackXdslHubic.cache
                         }
                     }
    );
});
