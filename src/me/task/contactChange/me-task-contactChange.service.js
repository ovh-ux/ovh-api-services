angular.module("ovh-api-services").service("OvhApiMeTaskContactChange", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiMeTaskContactChangeLexi");
        }
    };
});
