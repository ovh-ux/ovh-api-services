angular.module("ovh-api-services").service("UserFidelityAccount", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserFidelityAccountLexi");
        }
    };

});
