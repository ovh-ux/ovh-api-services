angular.module("ovh-api-services").service("OvhApiUserBillDetails", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiUserBillDetailsLexi");
        }
    };

});
