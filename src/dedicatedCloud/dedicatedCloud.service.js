angular.module("ovh-api-services").service("OvhApiDedicatedCloud", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudV6");
        },
        User: function () {
            return $injector.get("OvhApiDedicatedCloudUser");
        },
        Filer: function () {
            return $injector.get("OvhApiDedicatedCloudFiler");
        },
        Datacenter: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenter");
        },
        Location: function () {
            return $injector.get("OvhApiDedicatedCloudLocation");
        },
        Option: function () {
            return $injector.get("OvhApiDedicatedCloudOption");
        },
        VRack: function () {
            return $injector.get("OvhApiDedicatedCloudVRack");
        },
        AllowedNetwork: function () {
            return $injector.get("OvhApiDedicatedCloudAllowedNetwork");
        },
        Task: function () {
            return $injector.get("OvhApiDedicatedCloudTask");
        }
    };

});
