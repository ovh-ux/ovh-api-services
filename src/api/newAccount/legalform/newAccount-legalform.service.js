angular.module("ovh-api-services").service("OvhApiNewAccountLegalForm", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiNewAccountLegalFormV6");
        }
    };
});
