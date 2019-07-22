angular.module("ovh-api-services").service("OvhApiCloudProjectSshKey", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectSshKeyV6");
        }
    };

});
