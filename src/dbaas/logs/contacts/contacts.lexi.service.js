angular.module("ovh-api-services").service("OvhApiDbaasLogsContactsLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsContactsLexi");

    var contactsResource = $resource("/me/contact/:contactId", {
        contactId: "@contactId"
    }, {
        query: { method: "GET", isArray: true },
        get: { method: "GET", cache: cache }
    });

    contactsResource.resetAllCache = function () {
        contactsResource.resetCache();
    };

    contactsResource.resetCache = function () {
        cache.removeAll();
    };

    return contactsResource;
});
