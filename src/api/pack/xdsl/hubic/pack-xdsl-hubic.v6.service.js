angular.module("ovh-api-services").service("OvhApiPackXdslHubicV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslHubicV6");

    return $resource("/pack/xdsl/:packName/hubic/services", {
        packName: "@packName"
    }, {
        getDomainDetails: {
            method: "GET",
            url: "/pack/xdsl/:packName/hubic/services/:domain/details",
            cache: cache,
            params: {
                domain: "@domain"
            }
        }
    });
});
