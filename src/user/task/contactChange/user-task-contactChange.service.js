angular.module("ovh-api-services").service("OvhApiUserTaskContactChange", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiUserTaskContactChangeLexi");
        }
    };
});

