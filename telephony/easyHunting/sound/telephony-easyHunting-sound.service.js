angular.module("ovh-api-services").service("TelephonyEasyHuntingSound", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingSoundLexi");
        }
    };
});
