angular.module("ovh-api-services").service("OvhApiDedicatedCloud", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCloudLexi");
        },
        User: function () {
            return $injector.get("OvhApiDedicatedCloudUser");
        },
        Filer: function () {
            return $injector.get("OvhApiDedicatedCloudFiler");
        },
        Datacenter: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenter");
        }
    };

});
