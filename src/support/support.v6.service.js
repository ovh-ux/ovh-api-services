"use strict";

angular.module("ovh-api-services").service("OvhApiSupportV6", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiSupportV6");
    var queryCache = $cacheFactory("OvhApiSupportV6Query");

    var support = $resource("/support/tickets/:id", {
        id: "@id"
    }, {
        schema: { method: "GET", url: "/support.json" },
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        queryMessages: {
            method: "GET",
            url: "/support/tickets/:id/messages",
            isArray: true
        },
        create: {
            method: "POST",
            url: "/support/tickets/:id/create"
        },
        close: {
            method: "POST",
            url: "/support/tickets/:id/close"
        },
        reopen: {
            method: "POST",
            url: "/support/tickets/:id/reopen"
        },
        reply: {
            method: "POST",
            url: "/support/tickets/:id/reply"
        }
    }
    );

    support.resetCache = function () {
        cache.removeAll();
    };

    support.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return support;
});
