angular.module("ovh-api-services").service("TelephonyOvhPabxMenu", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxMenuLexi");
        },
        Entry: function () {
            return $injector.get("TelephonyOvhPabxMenuEntry");
        }
    };
});
