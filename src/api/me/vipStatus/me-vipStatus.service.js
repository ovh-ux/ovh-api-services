angular.module("ovh-api-services").service("OvhApiMeVipStatus", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeVipStatusV6");
        }
    };
});
