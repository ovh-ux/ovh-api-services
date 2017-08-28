angular.module("ovh-api-services").service("OvhApiOrderLicenseOffice", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        New: function () {
            return $injector.get("OvhApiOrderLicenseOfficeNew");
        }
    };

});
