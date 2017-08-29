angular.module("ovh-api-services").service("OvhApiPackXdslAapi", function ($resource, OvhApiPackXdsl) {
    "use strict";

    var packXdslAapi = $resource("/pack/xdsl/:packId", {
        packId: "@packId"
    }, {
        get: {
            serviceType: "aapi",
            isArray: false,
            cache: OvhApiPackXdsl.cache
        },
        getLines: {
            url: "/pack/xdsl/:packId/lines",
            serviceType: "aapi",
            isArray: true,
            cache: OvhApiPackXdsl.cache
        }
    }
    );

    return packXdslAapi;
});
