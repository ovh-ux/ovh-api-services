angular.module("ovh-api-services").service("OvhApiVrackCloudProject", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiVrackCloudProjectV6");
        }
    };
});
