angular.module("ovh-api-services").service("OvhApiVeeam", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiVeeamV6");
        }
    };
});
