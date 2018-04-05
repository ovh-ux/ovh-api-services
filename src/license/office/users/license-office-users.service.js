angular.module("ovh-api-services").service("OvhApiLicenseOfficeUsers", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiLicenseOfficeUsersV6");
        }
    };

});
