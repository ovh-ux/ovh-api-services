angular.module("ovh-api-services").service("OvhApiCloudProjectAlerting", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectAlertingLexi");
        }
    };

});
