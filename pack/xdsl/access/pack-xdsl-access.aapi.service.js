angular.module("ovh-api-services").service("PackXdslAccessAapi", function ($resource, PackXdslAccess) {
    "use strict";

    return $resource("/pack/xdsl/:packId/access/services",
                     {
                         packId: "@packId"
                     }, {
                         query: {
                             serviceType: "aapi",
                             isArray: true,
                             cache: PackXdslAccess.cache
                         }
                     }
    );
});
