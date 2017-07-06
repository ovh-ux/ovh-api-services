angular.module("ovh-api-services").service("CloudProjectSshKey", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectSshKeyLexi");
        }
    };

});
