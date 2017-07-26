angular.module("ovh-api-services").service("LicenseOfficeUsageStatistics", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("LicenseOfficeUsageStatisticsLexi");
        }
    };

});
