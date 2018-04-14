angular.module("ovh-api-services").service("OvhApiMeApiApplication", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeApiApplicationV6");
        }
    };

});
