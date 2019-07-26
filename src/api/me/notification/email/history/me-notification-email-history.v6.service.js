angular.module("ovh-api-services").service("OvhApiMeNotificationEmailHistoryV6", function ($resource) {
    "use strict";

    return $resource("/me/notification/email/history/:id", {
        id: "@id"
    });
});
