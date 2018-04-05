angular.module("ovh-api-services").service("OvhApiDedicatedNashaV6", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("OvhApiDedicatedNashaV6");
    var schemaCache = $cacheFactory("OvhApiDedicatedNashav6Schema");
    var queryCache = $cacheFactory("OvhApiDedicatedNashaV6Query");

    var resource = $resource("/dedicated/nasha/:serviceName", {
        serviceName: "@serviceName"
    }, {
        schema: {
            method: "GET",
            cache: schemaCache,
            url: "/dedicated/nasha.json"
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        get: {
            method: "GET",
            cache: queryCache
        },
        getServiceInfos: {
            url: "/dedicated/nasha/:serviceName/serviceInfos",
            method: "GET",
            cache: otherCache
        },
        use: {
            method: "GET",
            url: "/dedicated/nasha/:serviceName/use",
            cache: otherCache,
            params: {
                type: "@type"
            }
        },
        updateDetail: {
            method: "PUT",
            url: "/dedicated/nasha/:serviceName",
            params: {
                customName: "@customName",
                monitored: "@monitored"
            }
        }
    });

    resource.resetAllCache = function () {
        resource.resetOtherCache();
        resource.resetSchemaCache();
        resource.resetQueryCache();
    };

    resource.resetOtherCache = function () {
        otherCache.removeAll();
    };

    resource.resetSchemaCache = function () {
        schemaCache.removeAll();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
});
