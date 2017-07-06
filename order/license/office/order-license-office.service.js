angular.module("ovh-api-services").service("OrderLicenseOffice", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        New: function () {
            return $injector.get("OrderLicenseOfficeNew");
        }
    };

});
