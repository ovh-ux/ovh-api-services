angular.module("ovh-api-services").service("OvhApiDbaasLogsDashboard", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsDashboardV6");
        },
        Iceberg: function () {
            return $injector.get("OvhApiDbaasLogsDashboardIceberg");
        },
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsDashboardAapi");
        }
    };
});
