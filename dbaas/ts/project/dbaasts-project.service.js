angular.module("ovh-api-services").service("DBaasTsProject", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("DBaasTsProjectLexi");
        },
        Key: function () {
            return $injector.get("DBaasTsProjectKey");
        },
        Quota: function () {
            return $injector.get("DBaasTsProjectQuota");
        },
        Billing: function () {
            return $injector.get("DBaasTsProjectBilling");
        }
    };
});
