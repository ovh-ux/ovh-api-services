angular.module("ovh-api-services").service("OvhApiMeTelephonyDefaultIpRestriction", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMeTelephonyDefaultIpRestrictionLexi");
        }
    };
});
