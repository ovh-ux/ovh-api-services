angular.module("ovh-api-services").service("OvhApiCloudProjectStack", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectStackV6");
        }
    };

});
