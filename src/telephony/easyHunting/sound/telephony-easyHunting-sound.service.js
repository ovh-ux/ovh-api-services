angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingSound", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingSoundV6");
        }
    };
});
