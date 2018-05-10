angular.module("ovh-api-services").service("OvhApiNotification", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("OvhNotificationAapi");
        }
    };
});
