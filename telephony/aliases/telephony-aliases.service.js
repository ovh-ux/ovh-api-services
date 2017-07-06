angular.module("ovh-api-services").service("TelephonyAliases", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyAliasesLexi");
        }
    };
});
