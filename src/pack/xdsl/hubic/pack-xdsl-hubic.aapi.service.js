angular.module("ovh-api-services").service("OvhApiPackXdslHubicAapi", function ($resource, OvhApiPackXdslHubic) {
    "use strict";

    return $resource("/pack/xdsl/:packId/hubic", {
        packId: "@packId"
    }, {
        query: {
            serviceType: "aapi",
            isArray: true,
            cache: OvhApiPackXdslHubic.cache
        }
    });
});
