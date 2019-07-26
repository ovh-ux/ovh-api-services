angular.module("ovh-api-services").service("OvhApiCloudProjectQuota", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectQuotaV6");
        }
    };

});
