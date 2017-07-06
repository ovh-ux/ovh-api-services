angular.module("ovh-api-services").service("PackXdslAapi", function ($resource, PackXdsl) {
    "use strict";

    var packXdslAapi = $resource("/pack/xdsl/:packId", {
        packId: "@packId"
    }, {
        get: {
            serviceType: "aapi",
            isArray: false,
            cache: PackXdsl.cache
        },
        getLines: {
            url: "/pack/xdsl/:packId/lines",
            serviceType: "aapi",
            isArray: true,
            cache: PackXdsl.cache
        }
    }
    );

    return packXdslAapi;
});
