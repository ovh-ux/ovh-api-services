angular.module("ovh-api-services").service("OvhApiMeApiCredential", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeApiCredentialV6");
        }
    };

});
