angular.module("ovh-api-services").service("OvhApiDedicatedCephAcl", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCephAclLexi");
        }
    };
});
