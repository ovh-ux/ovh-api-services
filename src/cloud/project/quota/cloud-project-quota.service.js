angular.module("ovh-api-services").service("OvhApiCloudProjectQuota", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectQuotaLexi");
        }
    };

});
