angular.module("ovh-api-services").service("OvhApiOrderLicenseOffice", function ($injector) {
    "use strict";

    return {
        v6: angular.noop,
        New: function () {
            return $injector.get("OvhApiOrderLicenseOfficeNew");
        }
    };

});
