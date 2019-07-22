angular.module("ovh-api-services").service("OvhApiDedicatedCephAcl", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCephAclV6");
        }
    };
});
