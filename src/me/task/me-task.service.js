angular.module("ovh-api-services").service("OvhApiMeTask", function ($injector) {
    "use strict";
    return {
        ContactChange: function () {
            return $injector.get("OvhApiMeTaskContactChange");
        }
    };
});
