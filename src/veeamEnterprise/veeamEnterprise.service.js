angular.module("ovh-api-services").service("OvhApiVeeamEnterprise", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiVeeamEnterpriseV6");
        }
    };
});
