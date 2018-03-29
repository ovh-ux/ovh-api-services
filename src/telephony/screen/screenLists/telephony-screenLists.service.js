angular.module("ovh-api-services").service("OvhApiTelephonyScreenLists", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyScreenListsV6");
        }
    };
});
