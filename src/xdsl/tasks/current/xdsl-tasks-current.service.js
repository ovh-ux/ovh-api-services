angular.module("ovh-api-services").service("OvhApiXdslTasksCurrent", function ($injector) {
    "use strict";

    return {
        v6: angular.noop,
        Aapi: function () {
            return $injector.get("OvhApiXdslTasksCurrentAapi");
        }
    };
});
