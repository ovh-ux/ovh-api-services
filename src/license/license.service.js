angular.module("ovh-api-services").service("License", function ($injector) {
    "use strict";
    return {
        Office: function () {
            return $injector.get("LicenseOffice");
        }
    };
});
