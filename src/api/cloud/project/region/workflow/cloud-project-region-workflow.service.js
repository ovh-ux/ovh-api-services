angular.module("ovh-api-services").service("OvhApiCloudProjectRegionWorkflow", function ($injector) {
    "use strict";

    return {
        Backup: function () {
            return $injector.get("OvhApiCloudProjectRegionWorkflowBackup");
        }
    };
});
