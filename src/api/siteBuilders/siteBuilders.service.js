angular.module("ovh-api-services").service("OvhApiSiteBuilders", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiSiteBuildersAapi");
        }
    };
});
