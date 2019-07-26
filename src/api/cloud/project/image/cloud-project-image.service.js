angular.module("ovh-api-services").service("OvhApiCloudProjectImage", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectImageV6");
        }
    };

});
