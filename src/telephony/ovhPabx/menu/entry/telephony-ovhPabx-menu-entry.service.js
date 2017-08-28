angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxMenuEntry", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxMenuEntryLexi");
        }
    };
});
