angular.module("ovh-api-services").service("OvhApiCloudProjectIplbV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectIplbV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectIplbV6");

    var loadbalancers = $resource("/cloud/project/:serviceName/ipLoadbalancing/:id", {
        serviceName: "@serviceName",
        id: "@id"
    }, {
        get: { method: "GET", cache: cache },
        post: { method: "POST" },
        validate: { method: "POST", url: "/cloud/project/:serviceName/ipLoadbalancing/:id/validate" },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        }
    });

    loadbalancers.resetCache = function () {
        cache.removeAll();
    };

    loadbalancers.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return loadbalancers;

});
