angular.module("ovh-api-services").service("OvhApiUserFidelityAccount", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiUserFidelityAccountLexi");
        }
    };

});
