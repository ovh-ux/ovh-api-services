angular.module("ovh-api-services").service("OvhApiStatusTask", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiStatusTaskLexi");
        }
    };

});
