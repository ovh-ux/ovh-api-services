angular.module("ovh-api-services").service("OvhApiOrderFreefax", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiOrderFreefaxV6");
        }
    };
});
