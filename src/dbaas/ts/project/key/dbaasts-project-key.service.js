angular.module("ovh-api-services").service("OvhApiDBaasTsProjectKey", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiDBaasTsProjectKeyLexi");
        }
    };
});
