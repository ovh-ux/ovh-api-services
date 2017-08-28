angular.module("ovh-api-services").service("OvhApiSmsUsers", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsUsersLexi");
        },
        Incoming: function () {
            return $injector.get("OvhApiSmsUsersIncoming");
        },
        Jobs: function () {
            return $injector.get("OvhApiSmsUsersJobs");
        },
        Outgoing: function () {
            return $injector.get("OvhApiSmsUsersOutgoing");
        },
        Receivers: function () {
            return $injector.get("OvhApiSmsUsersReceivers");
        }
    };
});
