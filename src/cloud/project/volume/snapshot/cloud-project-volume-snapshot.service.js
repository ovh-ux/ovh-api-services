angular.module("ovh-api-services").service("OvhApiCloudProjectVolumeSnapshot", function ($injector) {
    "use strict";

    return {
        Tera: angular.noop,
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectVolumeSnapshotLexi");
        }
    };

});
