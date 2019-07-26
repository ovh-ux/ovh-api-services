angular.module("ovh-api-services").service("OvhApiOrderLicenseOfficeNew", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiOrderLicenseOfficeNewV6");
        }
    };

});
