angular.module("ovh-api-services").service("OvhApiVrackNasha", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiVrackNashaLexi");
        }
    };
});
