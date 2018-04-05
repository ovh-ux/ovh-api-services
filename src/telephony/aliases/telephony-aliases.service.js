angular.module("ovh-api-services").service("OvhApiTelephonyAliases", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyAliasesV6");
        }
    };
});
