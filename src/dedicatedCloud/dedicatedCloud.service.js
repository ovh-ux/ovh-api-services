angular.module("ovh-api-services").service("DedicatedCloud", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCloudLexi");
        },
        User: function () {
            return $injector.get("DedicatedCloudUser");
        },
        Filer: function () {
            return $injector.get("DedicatedCloudFiler");
        },
        Datacenter: function () {
            return $injector.get("DedicatedCloudDatacenter");
        }
    };

});
