angular.module("ovh-api-services").service("OvhApiCloudProjectBill", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectBillV6");
        }
    };

});
