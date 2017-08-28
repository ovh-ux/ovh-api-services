angular.module("ovh-api-services").service("OvhApiCloudProjectIpFailover", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectIpFailoverLexi");
        }
    };

});
