angular.module("ovh-api-services").service("OvhApiDbaasOrder", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasOrderLexi");
        }
    };
});
