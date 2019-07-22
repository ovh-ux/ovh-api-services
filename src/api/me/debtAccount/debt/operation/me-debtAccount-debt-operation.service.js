angular.module("ovh-api-services").service("OvhApiMeDebtAccountDebtOperation", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiMeDebtAccountDebtOperationV6");
        }
    };
});
