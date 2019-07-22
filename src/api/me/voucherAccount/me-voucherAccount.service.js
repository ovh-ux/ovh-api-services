angular.module("ovh-api-services").service("OvhApiMeVoucherAccount", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiMeVoucherAccountV6");
        },
        Movements: function () {
            return $injector.get("OvhApiMeVoucherAccountMovements");
        }
    };
});
