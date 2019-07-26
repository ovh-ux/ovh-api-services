angular.module("ovh-api-services").service("OvhApiMeAccessRestrictionBackupCode", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeAccessRestrictionBackupCodeV6");
        }
    };

});
