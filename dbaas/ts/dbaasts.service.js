angular.module("ovh-api-services").service("DBaasTs", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("DBaasTsLexi");
        },
        Region: function () {
            return $injector.get("DBaasTsRegion");
        },
        Project: function () {
            return $injector.get("DBaasTsProject");
        }
    };
});
