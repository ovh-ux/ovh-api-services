angular.module("ovh-api-services").service("OvhApiXdslIncident", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiXdslIncidentV6");
        }
    };
});
