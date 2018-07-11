angular.module("ovh-api-services").service("OvhApiXdslEmailPro", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiXdslEmailProV6");
        }
    };
});
