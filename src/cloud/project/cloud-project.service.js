angular.module("ovh-api-services").service("OvhApiCloudProject", function ($injector, $cacheFactory) {

    "use strict";

    var cache = $cacheFactory("CloudProject");

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectV6");
        },
        resetCache: cache.removeAll,
        cache: cache,
        Acl: function () {
            return $injector.get("OvhApiCloudProjectAcl");
        },
        Flavor: function () {
            return $injector.get("OvhApiCloudProjectFlavor");
        },
        Image: function () {
            return $injector.get("OvhApiCloudProjectImage");
        },
        Instance: function () {
            return $injector.get("OvhApiCloudProjectInstance");
        },
        Ip: function () {
            return $injector.get("OvhApiCloudProjectIp");
        },
        Region: function () {
            return $injector.get("OvhApiCloudProjectRegion");
        },
        Snapshot: function () {
            return $injector.get("OvhApiCloudProjectSnapshot");
        },
        SshKey: function () {
            return $injector.get("OvhApiCloudProjectSshKey");
        },
        Credit: function () {
            return $injector.get("OvhApiCloudProjectCredit");
        },
        User: function () {
            return $injector.get("OvhApiCloudProjectUser");
        },
        ServiceInfos: function () {
            return $injector.get("OvhApiCloudProjectServiceInfos");
        },
        Alerting: function () {
            return $injector.get("OvhApiCloudProjectAlerting");
        },
        Bill: function () {
            return $injector.get("OvhApiCloudProjectBill");
        },
        Migration: function () {
            return $injector.get("OvhApiCloudProjectMigration");
        },
        Stack: function () {
            return $injector.get("OvhApiCloudProjectStack");
        },
        Volume: function () {
            return $injector.get("OvhApiCloudProjectVolume");
        }
    };

});
