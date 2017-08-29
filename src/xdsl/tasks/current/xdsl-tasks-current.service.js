angular.module("ovh-api-services").service("OvhApiXdslTasksCurrent", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        Aapi: function () {
            return $injector.get("OvhApiXdslTasksCurrentAapi");
        }
    };
});
