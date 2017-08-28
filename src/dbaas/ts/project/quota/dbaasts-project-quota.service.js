angular.module("ovh-api-services").service("OvhApiDBaasTsProjectQuota", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiDBaasTsProjectQuotaLexi");
        }
    };
});
