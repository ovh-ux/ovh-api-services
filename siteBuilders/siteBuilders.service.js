angular.module("ovh-api-services").service("SiteBuilders", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("SiteBuildersAapi");
        }
    };
});
