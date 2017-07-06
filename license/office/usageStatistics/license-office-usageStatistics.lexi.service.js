angular.module("ovh-api-services").service("LicenseOfficeUsageStatisticsLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("LicenseOfficeUsageStatisticsLexiQuery");

    return $resource("/license/office/:serviceName/usageStatistics", {
        serviceName: "@serviceName",
        from: "@from",
        to: "@to"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache }
    });

});
