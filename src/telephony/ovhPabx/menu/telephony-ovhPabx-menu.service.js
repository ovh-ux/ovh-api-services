angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxMenu", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxMenuLexi");
        },
        Entry: function () {
            return $injector.get("OvhApiTelephonyOvhPabxMenuEntry");
        }
    };
});
