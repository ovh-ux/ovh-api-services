angular.module("ovh-api-services").service("OvhApiCloudProjectAlerting", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectAlertingV6");
        }
    };

});
