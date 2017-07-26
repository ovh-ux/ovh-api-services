angular.module("ovh-api-services").service("Changelog", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("ChangelogAapi");
        }
    };
});
