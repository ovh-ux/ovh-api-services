angular.module("ovh-api-services").service("OvhApiMeV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response;
        }
    };

    var me = $resource("/me", {}, {
        get: { method: "GET", cache: cache },
        update: { method: "PUT", interceptor: interceptor },
        schema: { method: "GET", url: "/me.json" },
        consumption: {
            method: "GET",
            url: "/me/consumption/usage/current",
            isArray: true
        },
        consumptionHistory: {
            method: "GET",
            url: "/me/consumption/usage/history",
            isArray: true
        },
        supportLevel: {
            method: "GET",
            url: "/me/supportLevel",
            isArray: false
        },
        certificates: {
            method: "GET",
            url: "/me/certificates",
            isArray: true
        }
    });

    me.resetCache = function () {
        cache.removeAll();
    };

    return me;

});
