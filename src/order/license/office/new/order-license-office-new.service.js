angular.module("ovh-api-services").service("OvhApiOrderLicenseOfficeNew", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderLicenseOfficeNewLexi");
        }
    };

});
