angular.module("ovh-api-services").service("OvhApiTelephonyVxml", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyVxmlLexi");
        }
    };
});
