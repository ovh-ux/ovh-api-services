angular.module("ovh-api-services").service("UserTaskContactChange", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("UserTaskContactChangeLexi");
        }
    };
});

