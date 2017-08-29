angular.module("ovh-api-services").service("OvhApiTelephonyRedirect", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyRedirectLexi");
        }
    };
});
