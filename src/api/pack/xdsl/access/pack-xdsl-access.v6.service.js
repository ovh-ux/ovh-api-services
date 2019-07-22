angular.module("ovh-api-services").service("OvhApiPackXdslAccessV6", function ($resource, OvhApiPackXdslAccess) {
    "use strict";

    return $resource("/pack/xdsl/:packId/xdslAccess", {
        packId: "@packId"
    }, {
        getServices: {
            url: "/pack/xdsl/:packId/xdslAccess/services",
            isArray: true,
            cache: OvhApiPackXdslAccess.cache
        }
    });
});
