angular.module("ovh-api-services").service("CloudProjectBill", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectBillLexi");
        }
    };

});
