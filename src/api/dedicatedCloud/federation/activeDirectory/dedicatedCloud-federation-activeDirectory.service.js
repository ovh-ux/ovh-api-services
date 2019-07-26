angular.module("ovh-api-services").service("OvhApiDedicatedCloudFederationActiveDirectory", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudFederationActiveDirectoryV6");
        }
    };

});
