angular.module("ovh-api-services").service("OvhApiStatus", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiStatusLexi");
        },
        Task: function () {
            return $injector.get("OvhApiStatusTask");
        }
    };

});
