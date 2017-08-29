angular.module("ovh-api-services").service("OvhApiProducts", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiProductsAapi");
        }
    };
});
