angular.module("ovh-api-services").service("OvhApiMeFidelityAccount", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMeFidelityAccountLexi");
        }
    };

});
