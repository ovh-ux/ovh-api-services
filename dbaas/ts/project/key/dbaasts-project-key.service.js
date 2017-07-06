angular.module("ovh-api-services").service("DBaasTsProjectKey", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("DBaasTsProjectKeyLexi");
        }
    };
});
