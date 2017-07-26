angular.module("ovh-api-services").service("Products", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("ProductsAapi");
        }
    };
});
