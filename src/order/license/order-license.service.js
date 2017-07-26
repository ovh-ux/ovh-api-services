angular.module("ovh-api-services").service("OrderLicense", function ($injector) {
    "use strict";
    return {
        Office: function () {
            return $injector.get("OrderLicenseOffice");
        },
        Lexi: angular.noop
    };
});
