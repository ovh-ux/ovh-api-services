angular.module("ovh-api-services").service("OvhApiLicenseOfficeDomain", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiLicenseOfficeDomainV6");
        }
    };

});
