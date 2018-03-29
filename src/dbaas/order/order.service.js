angular.module("ovh-api-services").service("OvhApiDbaasOrder", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasOrderV6");
        }
    };
});
