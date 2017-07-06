angular.module("ovh-api-services").service("PackXdslAccessLexi", function ($resource, PackXdslAccess) {
    "use strict";

    return $resource("/pack/xdsl/:packId/xdslAccess",
                     {
                         packId: "@packId"
                     }, {
                         getServices: {
                             url: "/pack/xdsl/:packId/xdslAccess/services",
                             isArray: true,
                             cache: PackXdslAccess.cache
                         }
                     }
    );
});
