angular.module("ovh-api-services").service("VrackNasha", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("VrackNashaLexi");
        }
    };
});
