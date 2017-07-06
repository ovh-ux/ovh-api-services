angular.module("ovh-api-services").service("CloudProjectAcl", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectAclLexi");
        }
    };

});
