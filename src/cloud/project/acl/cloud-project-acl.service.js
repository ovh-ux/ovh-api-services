angular.module("ovh-api-services").service("OvhApiCloudProjectAcl", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectAclV6");
        }
    };

});
