angular.module("ovh-api-services").service("OvhApiTelephonyScreen", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyScreenV6");
        },
        ScreenLists: function () {
            return $injector.get("OvhApiTelephonyScreenLists");
        }
    };
});
