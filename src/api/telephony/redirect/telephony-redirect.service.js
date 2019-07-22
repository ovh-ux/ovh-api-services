angular.module("ovh-api-services").service("OvhApiTelephonyRedirect", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyRedirectV6");
        }
    };
});
