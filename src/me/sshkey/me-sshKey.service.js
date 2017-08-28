angular.module("ovh-api-services").service("OvhApiMeSshKey", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMeSshKeyLexi");
        }
    };
});
