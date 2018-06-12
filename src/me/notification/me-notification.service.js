angular.module("ovh-api-services").service("OvhApiMeNotification", function ($injector) {
    "use strict";
    return {
        Email: function () {
            return $injector.get("OvhApiMeNotificationEmail");
        }
    };
});
