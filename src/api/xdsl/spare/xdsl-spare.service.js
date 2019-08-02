angular.module("ovh-api-services").service("OvhApiXdslSpare", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiXdslSpareV6");
        }
    };
});
