angular.module("ovh-api-services").service("UserContact", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserContactLexi");
        },
        Erika: function () {
            return $injector.get("UserContactErika");
        }
    };

});
