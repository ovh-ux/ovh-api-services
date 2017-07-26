angular.module("ovh-api-services").service("UserTask", function ($injector) {
    "use strict";
    return {
        ContactChange: function () {
            return $injector.get("UserTaskContactChange");
        }
    };
});

