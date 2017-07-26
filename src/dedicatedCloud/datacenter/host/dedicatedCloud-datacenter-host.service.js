angular.module("ovh-api-services").service("DedicatedCloudDatacenterHost", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCloudDatacenterHostLexi");
        }
    };

});
