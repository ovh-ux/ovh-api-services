angular.module("ovh-api-services").service("LicenseOfficeUsers", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("LicenseOfficeUsersLexi");
        }
    };

});
