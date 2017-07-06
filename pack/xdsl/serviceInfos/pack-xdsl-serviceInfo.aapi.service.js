angular.module("ovh-api-services").service("PackXdslServiceInfoAapi", function ($resource, PackXdslServiceInfo) {
    "use strict";

    return $resource("/pack/xdsl/:packName/serviceInfos/all", {
        packName: "@packName"
    }, {
        infoAll: {
            method: "GET",
            serviceType: "aapi",
            isArray: true,
            cache: PackXdslServiceInfo.cache
        }
    });
});
