angular.module("ovh-api-services").service("TelephonyScreenLists", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyScreenListsLexi");
        }
    };
});
