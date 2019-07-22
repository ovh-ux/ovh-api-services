angular.module("ovh-api-services").service("OvhApiHostingWebSsl", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiHostingWebSslV6");
        }
    };
});
