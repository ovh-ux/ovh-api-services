"use strict";

angular.module("ovh-api-services").service("SupportLexi", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("SupportLexi");
    var queryCache = $cacheFactory("SupportLexiQuery");

    var support = $resource("/support/tickets/:id", {
        id: "@id"
    }, {
        schema: { method: "GET", url: "/support.json" },
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        getMessages: {
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
