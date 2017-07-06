angular.module("ovh-api-services").service("Dbaas", function ($injector) {
    "use strict";

    return {
        Queue: function () {
            return $injector.get("DbaasQueue");
        }
    };
});
