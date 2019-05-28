angular.module("ovh-api-services").service("OvhApiCloudProjectUserRole", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectUserRoleV6");
        }
    };

});
