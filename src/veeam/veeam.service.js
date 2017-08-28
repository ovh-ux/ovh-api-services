angular.module("ovh-api-services").service("OvhApiVeeam", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiVeeamLexi");
        }
    };
});
