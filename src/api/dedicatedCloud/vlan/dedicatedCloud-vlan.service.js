angular.module("ovh-api-services").service("OvhApiDedicatedCloudVlan", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudVlanV6");
        }
    };

});
