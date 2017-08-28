angular.module("ovh-api-services").service("OvhApiNewAccountLegalForm", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiNewAccountLegalFormLexi");
        }
    };
});
