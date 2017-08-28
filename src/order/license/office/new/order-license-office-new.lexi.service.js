angular.module("ovh-api-services").service("OvhApiOrderLicenseOfficeNewLexi", function ($resource, $cacheFactory, OvhApiLicense) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderLicenseOfficeNewLexiQuery");
    var cache = $cacheFactory("OvhApiOrderLicenseOfficeNewLexi");

    var interceptor = {
        response: function (response) {
            OvhApiLicense.Office().Lexi().resetQueryCache();
            return response;
        }
    };

    return $resource("/order/license/office/new/:duration", {
        duration: "@duration"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        save: { method: "POST", interceptor: interceptor }
    });
});
