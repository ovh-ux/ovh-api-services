angular.module("ovh-api-services").service("OvhApiDBaasTsProjectQuota", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDBaasTsProjectQuotaV6");
        }
    };
});
