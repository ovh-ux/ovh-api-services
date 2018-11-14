angular.module("ovh-api-services").service("OvhApiEmailPro", function ($injector) {
    "use strict";
    return {
        v7: function () {
            return $injector.get("OvhApiEmailProV7");
        }
    };
});
