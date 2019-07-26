angular.module("ovh-api-services").service("OvhApiLicenseOfficeUsageStatisticsV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiLicenseOfficeUsageStatisticsV6Query");

    return $resource("/license/office/:serviceName/usageStatistics", {
        serviceName: "@serviceName",
        from: "@from",
        to: "@to"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache }
    });

});
