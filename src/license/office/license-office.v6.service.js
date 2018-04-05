"use strict";

angular.module("ovh-api-services").service("OvhApiLicenseOfficeV6", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiLicenseOfficeV6");
    var queryCache = $cacheFactory("OvhApiLicenseOfficeV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var licensesOffice = $resource("/license/office/:serviceName", {
        serviceName: "@serviceName"
    }, {
        schema: { method: "GET", url: "/license/office.json" },
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor }
    });

    licensesOffice.resetCache = function () {
        cache.removeAll();
    };

    licensesOffice.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return licensesOffice;
});
