angular.module("ovh-api-services").service("OrderCloudProjectIp", function ($injector) {
    "use strict";

    return {
        Tera: angular.noop,
        Lexi: function () {
            return $injector.get("OrderCloudProjectIpLexi");
        }
    };

});
