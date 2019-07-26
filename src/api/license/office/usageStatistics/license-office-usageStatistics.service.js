angular.module("ovh-api-services").service("OvhApiLicenseOfficeUsageStatistics", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiLicenseOfficeUsageStatisticsV6");
        }
    };

});
