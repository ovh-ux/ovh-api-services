angular.module("ovh-api-services").service("OvhApiDedicatedCloudFederation", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudFederationV6");
        },
        ActiveDirectory: function () {
            return $injector.get("OvhApiDedicatedCloudFederationActiveDirectory");
        }
    };

});
