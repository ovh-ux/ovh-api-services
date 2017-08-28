angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenter", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterLexi");
        },
        Filer: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterFiler");
        },
        Host: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterHost");
        }
    };

});
