angular.module("ovh-api-services").service("OvhApiTelephonyLines", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLinesV6");
        }
    };
});
