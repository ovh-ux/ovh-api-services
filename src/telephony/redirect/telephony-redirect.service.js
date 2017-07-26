angular.module("ovh-api-services").service("TelephonyRedirect", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyRedirectLexi");
        }
    };
});
