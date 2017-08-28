angular.module("ovh-api-services").service("OvhApiDBaasTsProject", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiDBaasTsProjectLexi");
        },
        Key: function () {
            return $injector.get("OvhApiDBaasTsProjectKey");
        },
        Quota: function () {
            return $injector.get("OvhApiDBaasTsProjectQuota");
        },
        Billing: function () {
            return $injector.get("OvhApiDBaasTsProjectBilling");
        }
    };
});
