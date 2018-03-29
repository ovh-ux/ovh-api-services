angular.module("ovh-api-services").service("OvhApiVrackLegacyVrack", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiVrackLegacyVrackV6");
        }
    };
});
