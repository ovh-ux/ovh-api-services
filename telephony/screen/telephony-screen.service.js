angular.module("ovh-api-services").service("TelephonyScreen", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyScreenLexi");
        },
        ScreenLists: function () {
            return $injector.get("TelephonyScreenLists");
        }
    };
});
