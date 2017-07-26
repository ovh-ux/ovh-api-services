angular.module("ovh-api-services").service("OrderLicenseOfficeNewLexi", function ($resource, $cacheFactory, License) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OrderLicenseOfficeNewLexiQuery");
    var cache = $cacheFactory("OrderLicenseOfficeNewLexi");

    var interceptor = {
        response: function (response) {
            License.Office().Lexi().resetQueryCache();
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
