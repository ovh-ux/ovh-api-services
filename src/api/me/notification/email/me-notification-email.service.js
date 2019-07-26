angular.module("ovh-api-services").service("OvhApiMeNotificationEmail", function ($injector) {
    "use strict";
    return {
        History: function () {
            return $injector.get("OvhApiMeNotificationEmailHistory");
        }
    };
});
