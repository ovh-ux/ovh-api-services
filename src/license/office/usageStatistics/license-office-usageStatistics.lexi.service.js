angular.module("ovh-api-services").service("OvhApiLicenseOfficeUsageStatisticsLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiLicenseOfficeUsageStatisticsLexiQuery");

    return $resource("/license/office/:serviceName/usageStatistics", {
        serviceName: "@serviceName",
        from: "@from",
        to: "@to"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache }
    });

});
