angular.module("ovh-api-services").service("OvhApiLicenseOffice", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiLicenseOfficeV6");
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
