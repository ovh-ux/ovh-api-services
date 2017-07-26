angular.module("ovh-api-services").service("UserVipStatus", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserVipStatusLexi");
        }
    };
});
