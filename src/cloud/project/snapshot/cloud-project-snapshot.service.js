angular.module("ovh-api-services").service("OvhApiCloudProjectSnapshot", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectSnapshotLexi");
        }
    };

});
