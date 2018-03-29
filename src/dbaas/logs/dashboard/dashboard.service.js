angular.module("ovh-api-services").service("OvhApiDbaasLogsDashboard", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsDashboardV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsDashboardAapi");
        }
    };
});
