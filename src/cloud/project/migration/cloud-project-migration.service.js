angular.module("ovh-api-services").service("OvhApiCloudProjectMigration", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectMigrationLexi");
        }
    };

});
