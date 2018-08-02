angular.module("ovh-api-services").service("OvhApiDedicatedCloudLocation", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudLocationV6");
        },
        Stock: function () {
            return $injector.get("OvhApiDedicatedCloudLocationStock");
        },
        Hypervisor: function () {
            return $injector.get("OvhApiDedicatedCloudLocationHypervisor");
        },
        HostProfile: function () {
            return $injector.get("OvhApiDedicatedCloudLocationHostProfile");
        }
    };

});
