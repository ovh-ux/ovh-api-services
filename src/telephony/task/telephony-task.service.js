angular.module("ovh-api-services").service("TelephonyTask", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyTaskLexi");
        }
    };
});
