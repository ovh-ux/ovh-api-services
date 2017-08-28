angular.module("ovh-api-services").service("OvhApiStoreContactLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiStoreContactLexi");
    var queryCache = $cacheFactory("OvhApiStoreContactLexiQuery");

    var contact = $resource("/store/contact/:contactId", { contactId: "@contactId" }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: cache },
        create: { method: "POST", interceptor: interceptor },
        update: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    var interceptor = {
        response: function (response) {
            contact.resetCache();
            return response.data;
        }
    };

    contact.resetCache = function () {
        cache.removeAll();
        queryCache.removeAll();
    };

    return contact;
});

