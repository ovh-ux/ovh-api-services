angular.module("ovh-api-services").service("OvhApiOrderCloudProjectCredit", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderCloudProjectCreditLexi");
        }
    };

});
