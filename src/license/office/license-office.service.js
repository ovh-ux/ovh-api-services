angular.module("ovh-api-services").service("OvhApiLicenseOffice", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiLicenseOfficeLexi");
        },
        Domain: function () {
            return $injector.get("OvhApiLicenseOfficeDomain");
        },
        Users: function () {
            return $injector.get("OvhApiLicenseOfficeUsers");
        },
        UsageStatistics: function () {
            return $injector.get("OvhApiLicenseOfficeUsageStatistics");
        }
    };
});
