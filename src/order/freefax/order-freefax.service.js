angular.module("ovh-api-services").service("OvhApiOrderFreefax", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderFreefaxLexi");
        }
    };
});
