angular.module("ovh-api-services").service("LicenseOffice", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("LicenseOfficeLexi");
        },
        Domain: function () {
            return $injector.get("LicenseOfficeDomain");
        },
        Users: function () {
            return $injector.get("LicenseOfficeUsers");
        },
        UsageStatistics: function () {
            return $injector.get("LicenseOfficeUsageStatistics");
        }
    };
});
