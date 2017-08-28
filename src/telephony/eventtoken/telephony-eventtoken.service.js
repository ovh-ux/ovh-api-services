angular.module("ovh-api-services").service("OvhApiTelephonyEventtoken", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEventtokenLexi");
        }
    };
});
