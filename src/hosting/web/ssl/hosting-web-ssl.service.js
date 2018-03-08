angular.module("ovh-api-services").service("OvhApiHostingWebSsl", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiHostingWebSslLexi");
        }
    };
});
