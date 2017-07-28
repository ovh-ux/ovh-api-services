angular.module("ovh-api-services").service("OrderFreefax", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OrderFreefaxLexi");
        }
    };
});
