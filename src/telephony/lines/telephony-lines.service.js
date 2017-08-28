angular.module("ovh-api-services").service("OvhApiTelephonyLines", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLinesLexi");
        }
    };
});
