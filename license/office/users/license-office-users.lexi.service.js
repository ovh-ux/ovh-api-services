angular.module("ovh-api-services").service("LicenseOfficeUsersLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("LicenseOfficeUsersLexi");
    var queryCache = $cacheFactory("LicenseOfficeUsersLexiQuery");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var licenseOfficeUsers = $resource("/license/office/:serviceName/user/:user", {
        serviceName: "@serviceName",
        user: "@user"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        save: { method: "POST", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    licenseOfficeUsers.resetCache = function () {
        cache.removeAll();
    };

    licenseOfficeUsers.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return licenseOfficeUsers;
});
