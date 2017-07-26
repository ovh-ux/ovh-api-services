angular.module("ovh-api-services").service("SmsUsers", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsUsersLexi");
        },
        Incoming: function () {
            return $injector.get("SmsUsersIncoming");
        },
        Jobs: function () {
            return $injector.get("SmsUsersJobs");
        },
        Outgoing: function () {
            return $injector.get("SmsUsersOutgoing");
        },
        Receivers: function () {
            return $injector.get("SmsUsersReceivers");
        }
    };
});
