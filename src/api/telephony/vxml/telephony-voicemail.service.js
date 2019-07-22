angular.module("ovh-api-services").service("OvhApiTelephonyVxml", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyVxmlV6");
        }
    };
});
