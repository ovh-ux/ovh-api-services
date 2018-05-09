angular.module("ovh-api-services").service("OvhApiCdnDedicatedSsl", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCdnDedicatedSslV6");
        }
    };
});
