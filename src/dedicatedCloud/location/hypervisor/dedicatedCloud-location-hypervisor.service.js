angular.module("ovh-api-services").service("OvhApiDedicatedCloudLocationHypervisor", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudLocationHypervisorV6");
        }
    };
});
