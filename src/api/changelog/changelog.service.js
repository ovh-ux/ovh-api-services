angular.module("ovh-api-services").service("OvhApiChangelog", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("OvhApiChangelogAapi");
        }
    };
});
