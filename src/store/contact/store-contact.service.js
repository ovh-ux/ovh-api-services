angular.module("ovh-api-services").service("StoreContact", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("StoreContactLexi");
        }
    };
});
