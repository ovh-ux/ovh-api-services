angular.module("ovh-api-services").service("CloudProject", function ($injector, $cacheFactory) {

    "use strict";

    var cache = $cacheFactory("CloudProject");

    return {
        Lexi: function () {
            return $injector.get("CloudProjectLexi");
        },
        resetCache: cache.removeAll,
        cache: cache,
        Acl: function () {
            return $injector.get("CloudProjectAcl");
        },
        Flavor: function () {
            return $injector.get("CloudProjectFlavor");
        },
        Image: function () {
            return $injector.get("CloudProjectImage");
        },
        Instance: function () {
            return $injector.get("CloudProjectInstance");
        },
        Ip: function () {
            return $injector.get("CloudProjectIp");
        },
        Region: function () {
            return $injector.get("CloudProjectRegion");
        },
        Snapshot: function () {
            return $injector.get("CloudProjectSnapshot");
        },
        SshKey: function () {
            return $injector.get("CloudProjectSshKey");
        },
        Credit: function () {
            return $injector.get("CloudProjectCredit");
        },
        User: function () {
            return $injector.get("CloudProjectUser");
        },
        ServiceInfos: function () {
            return $injector.get("CloudProjectServiceInfos");
        },
        Alerting: function () {
            return $injector.get("CloudProjectAlerting");
        },
        Bill: function () {
            return $injector.get("CloudProjectBill");
        },
        Migration: function () {
            return $injector.get("CloudProjectMigration");
        }
    };

});
