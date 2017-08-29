angular.module("ovh-api-services").service("OvhApiDedicatedNasLexi", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("OvhApiDedicatedNasLexi");
    var queryCache = $cacheFactory("OvhApiDedicatedNasLexiQuery");

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
