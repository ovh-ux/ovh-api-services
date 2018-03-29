angular.module("ovh-api-services").service("OvhApiMeTelephonyDefaultIpRestriction", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeTelephonyDefaultIpRestrictionV6");
        }
    };
});
