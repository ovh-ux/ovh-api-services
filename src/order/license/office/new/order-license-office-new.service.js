angular.module("ovh-api-services").service("OrderLicenseOfficeNew", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OrderLicenseOfficeNewLexi");
        }
    };

});
