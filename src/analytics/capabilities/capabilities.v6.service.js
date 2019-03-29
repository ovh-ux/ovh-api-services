angular.module("ovh-api-services").service("OvhApiAnalyticsCapabilitiesV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiAnalyticsCapabilitiesV6Query");

    var adpResource = $resource("/analytics/capabilities/platforms", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache }
    });

    adpResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return adpResource;
});
