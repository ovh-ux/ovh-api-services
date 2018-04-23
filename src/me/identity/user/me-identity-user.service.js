angular.module("ovh-api-services").service("OvhApiMeIdentityUser", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiMeIdentityUserV6");
        }
    };
});
