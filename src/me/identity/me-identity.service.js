angular.module("ovh-api-services").service("OvhApiMeIdentity", function ($injector) {
    "use strict";
    return {
        Group: function () {
            return $injector.get("OvhApiMeIdentityGroup");
        },
        User: function () {
            return $injector.get("OvhApiMeIdentityUser");
        }
    };
});
