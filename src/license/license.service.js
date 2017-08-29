angular.module("ovh-api-services").service("OvhApiLicense", function ($injector) {
    "use strict";
    return {
        Office: function () {
            return $injector.get("OvhApiLicenseOffice");
        }
    };
});
