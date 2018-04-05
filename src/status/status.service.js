angular.module("ovh-api-services").service("OvhApiStatus", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiStatusV6");
        },
        Task: function () {
            return $injector.get("OvhApiStatusTask");
        }
    };

});
