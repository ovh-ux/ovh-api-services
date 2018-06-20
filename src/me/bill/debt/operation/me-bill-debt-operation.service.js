angular.module("ovh-api-services").service("OvhApiMeBillDebtOperation", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiMeBillDebtOperationV6");
        }
    };
});
