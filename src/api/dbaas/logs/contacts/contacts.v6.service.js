angular.module("ovh-api-services").service("OvhApiDbaasLogsContactsV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsContactsV6");

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
