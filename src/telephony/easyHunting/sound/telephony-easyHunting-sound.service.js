angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingSound", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingSoundLexi");
        }
    };
});
