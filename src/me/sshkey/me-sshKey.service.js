angular.module("ovh-api-services").service("OvhApiMeSshKey", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeSshKeyV6");
        }
    };
});
