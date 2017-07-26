angular.module("ovh-api-services").service("XdslTasksCurrent", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        Aapi: function () {
            return $injector.get("XdslTasksCurrentAapi");
        }
    };
});
