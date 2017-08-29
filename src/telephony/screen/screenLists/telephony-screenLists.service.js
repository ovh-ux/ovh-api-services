angular.module("ovh-api-services").service("OvhApiTelephonyScreenLists", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyScreenListsLexi");
        }
    };
});
