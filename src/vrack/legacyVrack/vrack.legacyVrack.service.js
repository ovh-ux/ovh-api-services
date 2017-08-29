angular.module("ovh-api-services").service("OvhApiVrackLegacyVrack", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiVrackLegacyVrackLexi");
        }
    };
});
