angular.module("ovh-api-services").service("CloudProjectSnapshot", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectSnapshotLexi");
        }
    };

});
