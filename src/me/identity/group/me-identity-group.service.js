angular.module("ovh-api-services").service("OvhApiMeIdentityGroup", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiMeIdentityGroupV6");
        }
    };
});
