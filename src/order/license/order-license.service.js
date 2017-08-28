angular.module("ovh-api-services").service("OvhApiOrderLicense", function ($injector) {
    "use strict";
    return {
        Office: function () {
            return $injector.get("OvhApiOrderLicenseOffice");
        },
        Lexi: angular.noop
    };
});
