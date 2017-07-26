angular.module("ovh-api-services").service("LicenseOfficeDomain", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("LicenseOfficeDomainLexi");
        }
    };

});
