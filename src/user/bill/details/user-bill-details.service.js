angular.module("ovh-api-services").service("UserBillDetails", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserBillDetailsLexi");
        }
    };

});
