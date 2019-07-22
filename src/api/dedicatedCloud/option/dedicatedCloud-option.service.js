angular.module("ovh-api-services").service("OvhApiDedicatedCloudOption", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudOptionV6");
        }
    };

});
