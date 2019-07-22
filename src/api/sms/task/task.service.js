angular.module("ovh-api-services").service("OvhApiSmsTask", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTaskV6");
        }
    };
});
