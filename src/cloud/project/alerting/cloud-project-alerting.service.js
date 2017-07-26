angular.module("ovh-api-services").service("CloudProjectAlerting", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectAlertingLexi");
        }
    };

});
