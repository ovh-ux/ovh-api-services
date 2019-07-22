angular.module("ovh-api-services").service("OvhApiMeBillDetails", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeBillDetailsV6");
        }
    };

});
