angular.module("ovh-api-services").service("OvhApiMeContact", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeContactV6");
        },
        v7: function () {
            return $injector.get("OvhApiMeContactV7");
        }
    };

});
