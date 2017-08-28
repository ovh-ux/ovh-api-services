angular.module("ovh-api-services").service("OvhApiCloudProjectAcl", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectAclLexi");
        }
    };

});
