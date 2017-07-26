angular.module("ovh-api-services").service("Vps", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("VpsLexi");
        },
        Aapi: function () {
            return $injector.get("VpsAapi");
        }
    };

});
