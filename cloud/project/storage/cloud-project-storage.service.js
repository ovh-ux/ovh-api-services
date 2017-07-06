angular.module("ovh-api-services").service("CloudProjectStorage", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectStorageLexi");
        }
    };

});
