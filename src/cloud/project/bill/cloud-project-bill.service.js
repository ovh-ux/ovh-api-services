angular.module("ovh-api-services").service("OvhApiCloudProjectBill", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectBillLexi");
        }
    };

});
