angular.module("ovh-api-services").service("OvhApiMeVipStatus", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMeVipStatusLexi");
        }
    };
});
