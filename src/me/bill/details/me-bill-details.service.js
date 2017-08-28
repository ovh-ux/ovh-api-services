angular.module("ovh-api-services").service("OvhApiMeBillDetails", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMeBillDetailsLexi");
        }
    };

});
