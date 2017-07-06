angular.module("ovh-api-services").service("UserSshKey", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserSshKeyLexi");
        }
    };
});
