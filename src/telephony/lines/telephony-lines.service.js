angular.module("ovh-api-services").service("TelephonyLines", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyLinesLexi");
        }
    };
});
