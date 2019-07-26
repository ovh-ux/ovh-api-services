angular.module("ovh-api-services").service("OvhApiOrderLicenseOfficeNewV6", function ($resource, $cacheFactory, OvhApiLicense) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderLicenseOfficeNewV6Query");
    var cache = $cacheFactory("OvhApiOrderLicenseOfficeNewV6");

    var interceptor = {
        response: function (response) {
            OvhApiLicense.Office().v6().resetQueryCache();
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
