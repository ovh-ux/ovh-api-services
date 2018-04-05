angular.module("ovh-api-services").service("OvhApiDBaasTsProject", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDBaasTsProjectV6");
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
