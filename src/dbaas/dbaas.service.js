angular.module("ovh-api-services").service("OvhApiDbaas", function ($injector) {
    "use strict";

    return {
        Queue: function () {
            return $injector.get("OvhApiDbaasQueue");
        }
    };
});
