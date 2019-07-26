angular.module("ovh-api-services").service("OvhApiDedicatedCloud", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudV6");
        },
        AllowedNetwork: function () {
            return $injector.get("OvhApiDedicatedCloudAllowedNetwork");
        },
        Datacenter: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenter");
        },
        Federation: function () {
            return $injector.get("OvhApiDedicatedCloudFederation");
        },
        Filer: function () {
            return $injector.get("OvhApiDedicatedCloudFiler");
        },
        Ip: function () {
            return $injector.get("OvhApiDedicatedCloudIp");
        },
        Location: function () {
            return $injector.get("OvhApiDedicatedCloudLocation");
        },
        Option: function () {
            return $injector.get("OvhApiDedicatedCloudOption");
        },
        ServicePacks: function () {
            return $injector.get("OvhApiDedicatedCloudServicePacks");
        },
        Task: function () {
            return $injector.get("OvhApiDedicatedCloudTask");
        },
        User: function () {
            return $injector.get("OvhApiDedicatedCloudUser");
        },
        Vlan: function () {
            return $injector.get("OvhApiDedicatedCloudVlan");
        },
        VMEncryption: function () {
            return $injector.get("OvhApiDedicatedCloudVMEncryption");
        },
        VRack: function () {
            return $injector.get("OvhApiDedicatedCloudVRack");
        }
    };

});
