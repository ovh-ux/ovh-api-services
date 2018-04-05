angular.module("ovh-api-services").service("OvhApiCloudProjectSnapshot", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectSnapshotV6");
        }
    };

});
