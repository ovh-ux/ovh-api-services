angular.module("ovh-api-services").service("OvhApiMeFidelityAccount", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeFidelityAccountV6");
        }
    };

});
