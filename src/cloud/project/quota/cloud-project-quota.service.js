angular.module("ovh-api-services").service("CloudProjectQuota", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectQuotaLexi");
        }
    };

});
