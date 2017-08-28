angular.module("ovh-api-services").service("OvhApiUserVipStatus", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiUserVipStatusLexi");
        }
    };
});
