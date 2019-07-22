angular.module("ovh-api-services").service("OvhApiDedicatedNasV6", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("OvhApiDedicatedNasV6");
    var queryCache = $cacheFactory("OvhApiDedicatedNasV6Query");

    var dedicatedNasResource = $resource("/dedicated/nas/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        getServiceInfos: {
            url: "/dedicated/nas/:serviceName/serviceInfos",
            method: "GET",
            cache: otherCache
        }
    });

    dedicatedNasResource.resetAllCache = function () {
        dedicatedNasResource.resetOtherCache();
        dedicatedNasResource.resetQueryCache();
    };

    dedicatedNasResource.resetOtherCache = function () {
        otherCache.removeAll();
    };

    dedicatedNasResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return dedicatedNasResource;
});
