angular.module("ovh-api-services").service("TelephonyVxml", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyVxmlLexi");
        }
    };
});
