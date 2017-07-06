angular.module("ovh-api-services").service("DedicatedCloudDatacenter", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCloudDatacenterLexi");
        },
        Filer: function () {
            return $injector.get("DedicatedCloudDatacenterFiler");
        },
        Host: function () {
            return $injector.get("DedicatedCloudDatacenterHost");
        }
    };

});
