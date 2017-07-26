angular.module("ovh-api-services").service("CloudProjectIpFailover", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectIpFailoverLexi");
        }
    };

});
