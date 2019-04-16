angular.module("ovh-api-services").service("OvhApiDbaasLogsOffer", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsOfferV6");
        },
        Iceberg: function () {
            return $injector.get("OvhApiDbaasLogsOfferIceberg");
        }
    };
});
