angular.module("ovh-api-services").service("OvhApiPackXdslAccessAapi", function ($resource, OvhApiPackXdslAccess) {
    "use strict";

    return $resource("/pack/xdsl/:packId/access/services", {
        packId: "@packId"
    }, {
        query: {
            serviceType: "aapi",
            isArray: true,
            cache: OvhApiPackXdslAccess.cache
        }
    });
});
