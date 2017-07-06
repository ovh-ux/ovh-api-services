angular.module("ovh-api-services").service("DedicatedCephAcl", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCephAclLexi");
        }
    };
});
