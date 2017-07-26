angular.module("ovh-api-services").service("CloudPCA", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudPCALexi");
        }
    };

});
