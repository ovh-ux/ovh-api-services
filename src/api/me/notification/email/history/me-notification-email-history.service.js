angular.module("ovh-api-services").service("OvhApiMeNotificationEmailHistory", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiMeNotificationEmailHistoryV6");
        }
    };
});
