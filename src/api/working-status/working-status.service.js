angular.module("ovh-api-services").service("OvhApiWorkingStatus", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiWorkingStatusAapi");
        }
    };
});
