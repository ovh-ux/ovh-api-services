angular.module("ovh-api-services").service("OvhApiCloudProjectVolumeSnapshot", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectVolumeSnapshotV6");
        }
    };

});
