angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxMenu", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxMenuV6");
        },
        Entry: function () {
            return $injector.get("OvhApiTelephonyOvhPabxMenuEntry");
        }
    };
});
