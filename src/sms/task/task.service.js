angular.module("ovh-api-services").service("SmsTask", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TaskLexi");
        }
    };
});
