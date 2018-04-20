angular.module("ovh-api-services").service("OvhApiMeDepositRequest", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeDepositRequestV6");
        }
    };

});
