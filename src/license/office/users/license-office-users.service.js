angular.module("ovh-api-services").service("OvhApiLicenseOfficeUsers", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiLicenseOfficeUsersLexi");
        }
    };

});
