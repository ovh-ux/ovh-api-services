angular.module("ovh-api-services").service("OvhApiCloudProjectIpFailover", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectIpFailoverV6");
        }
    };

});
