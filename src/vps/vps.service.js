angular.module("ovh-api-services").service("OvhApiVps", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiVpsLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiVpsAapi");
        }
    };

});
