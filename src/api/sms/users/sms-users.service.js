angular.module("ovh-api-services").service("OvhApiSmsUsers", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsUsersV6");
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
