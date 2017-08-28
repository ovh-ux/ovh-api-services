angular.module("ovh-api-services").service("OvhApiSmsTask", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTaskLexi");
        }
    };
});
