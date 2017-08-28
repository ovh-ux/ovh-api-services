angular.module("ovh-api-services").service("OvhApiUserContact", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiUserContactLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiUserContactErika");
        }
    };

});
