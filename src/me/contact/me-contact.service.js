angular.module("ovh-api-services").service("OvhApiMeContact", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMeContactLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiMeContactErika");
        }
    };

});
