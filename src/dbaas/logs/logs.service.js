angular.module("ovh-api-services").service("OvhApiDbaasLogs", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasLogsLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsAapi");
        },
        Accounting: function () {
            return $injector.get("OvhApiDbaasLogsAccounting");
        },
        Stream: function () {
            return $injector.get("OvhApiDbaasLogsStream");
        },
        Offer: function () {
            return $injector.get("OvhApiDbaasLogsOffer");
        },
        Operation: function () {
            return $injector.get("OvhApiDbaasLogsOperation");
        },
        Order: function () {
            return $injector.get("OvhApiDbaasLogsOrder");
        },
        Detail: function () {
            return $injector.get("OvhApiDbaasLogsDetail");
        }
    };
});
