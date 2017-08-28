angular.module("ovh-api-services").service("OvhApiUserContactErika", function ($resource, $cacheFactory, Apiv7Endpoint) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiUserContactErikaQuery");
    var otherCache = $cacheFactory("OvhApiUserContactErika");

    var userContactResource = new Apiv7Endpoint("/me/contact/:contactId", {
        contactId: "@contactId"
    }, {
        query: {
            url: "/me/contact",
            method: "GET",
            cache: queryCache,
            isArray: true,
            serviceType: "apiv7"
        }
    });

    userContactResource.resetAllCache = function () {
        userContactResource.resetOtherCache();
        userContactResource.resetQueryCache();
    };

    userContactResource.resetOtherCache = function () {
        otherCache.removeAll();
    };

    userContactResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return userContactResource;
});
