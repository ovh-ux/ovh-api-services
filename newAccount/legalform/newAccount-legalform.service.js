angular.module("ovh-api-services").service("NewAccountLegalForm", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("NewAccountLegalFormLexi");
        }
    };
});
