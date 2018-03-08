angular.module("ovh-api-services").service("OvhApiDbaasLogsDashboard", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasLogsDashboardLexi");
        }
    };
});
