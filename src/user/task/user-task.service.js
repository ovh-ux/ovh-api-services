angular.module("ovh-api-services").service("OvhApiUserTask", function ($injector) {
    "use strict";
    return {
        ContactChange: function () {
            return $injector.get("OvhApiUserTaskContactChange");
        }
    };
});

