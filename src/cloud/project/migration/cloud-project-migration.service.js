angular.module("ovh-api-services").service("OvhApiCloudProjectMigration", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectMigrationV6");
        }
    };

});
