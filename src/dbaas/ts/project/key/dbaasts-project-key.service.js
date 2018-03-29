angular.module("ovh-api-services").service("OvhApiDBaasTsProjectKey", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDBaasTsProjectKeyV6");
        }
    };
});
