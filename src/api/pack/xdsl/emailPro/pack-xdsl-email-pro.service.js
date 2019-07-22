angular.module("ovh-api-services").service("OvhApiPackXdslEmailPro", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiPackXdslEmailProV6");
        }
    };
});
