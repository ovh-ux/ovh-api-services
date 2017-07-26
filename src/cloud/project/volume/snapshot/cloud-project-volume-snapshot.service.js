angular.module("ovh-api-services").service("CloudProjectVolumeSnapshot", function ($injector) {
    "use strict";

    return {
        Tera: angular.noop,
        Lexi: function () {
            return $injector.get("CloudProjectVolumeSnapshotLexi");
        }
    };

});
