angular.module("ovh-api-services").service("OvhApiCloudProjectKube", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("OvhApiCloudProjectKubeAapi");
        }
    };

});
