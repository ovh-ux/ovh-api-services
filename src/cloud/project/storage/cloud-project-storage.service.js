angular.module("ovh-api-services").service("OvhApiCloudProjectStorage", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectStorageLexi");
        }
    };

});
