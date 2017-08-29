angular.module("ovh-api-services").service("OvhApiOrderCloudProjectIp", function ($injector) {
    "use strict";

    return {
        Tera: angular.noop,
        Lexi: function () {
            return $injector.get("OvhApiOrderCloudProjectIpLexi");
        }
    };

});
