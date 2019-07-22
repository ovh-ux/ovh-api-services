angular.module("ovh-api-services").service("OvhApiOrderCloudProjectCredit", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiOrderCloudProjectCreditV6");
        }
    };

});
