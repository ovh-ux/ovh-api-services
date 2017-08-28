angular.module("ovh-api-services").service("OvhApiTelephonyScreen", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyScreenLexi");
        },
        ScreenLists: function () {
            return $injector.get("OvhApiTelephonyScreenLists");
        }
    };
});
