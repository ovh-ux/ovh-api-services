angular.module("ovh-api-services").service("OvhApiUserSshKey", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiUserSshKeyLexi");
        }
    };
});
