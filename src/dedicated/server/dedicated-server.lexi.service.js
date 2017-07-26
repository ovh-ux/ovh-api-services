angular.module("ovh-api-services").service("DedicatedServerLexi", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("DedicatedServerLexi");
    var queryCache = $cacheFactory("DedicatedServerLexiQuery");

    var dedicatedServerResource = $resource("/dedicated/server/:serverName", {
        serverName: "@serverName"
    }, {
        get: { method: "GET", cache: otherCache },
        query: { method: "GET", cache: queryCache, isArray: true },
        getHardware: {
            url: "/dedicated/server/:serverName/specifications/hardware",
            method: "GET",
            cache: otherCache
        },
        getNetwork: {
            url: "/dedicated/server/:serverName/specifications/network",
            method: "GET",
            cache: otherCache
        },
        getBootInfo: {
            url: "/dedicated/server/:serverName/boot/:bootId",
            method: "GET",
            bootId: "@bootId",
            cache: otherCache
        },
        getServiceInfos: {
            url: "/dedicated/server/:serverName/serviceInfos",
            method: "GET",
            cache: otherCache
        },
        getMrtg: {
            url: "/dedicated/server/:serverName/mrtg",
            method: "GET",
            period: "@period",
            type: "@type",
            cache: otherCache,
            isArray: true
        },
        getStatisticsChart: {
            url: "/dedicated/server/:serverName/statistics/chart",
            method: "GET",
            period: "@period",
            type: "@type",
            cache: otherCache
        },
        schema: {
            method: "GET",
            url: "/dedicated/server.json",
            cache: otherCache
        }
    });

    dedicatedServerResource.resetAllCache = function () {
        dedicatedServerResource.resetOtherCache();
        dedicatedServerResource.resetQueryCache();
    };

    dedicatedServerResource.resetOtherCache = function () {
        otherCache.removeAll();
    };

    dedicatedServerResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return dedicatedServerResource;
});
