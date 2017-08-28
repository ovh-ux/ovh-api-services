angular.module("ovh-api-services").service("OvhApiMeFax", function ($injector) {
    "use strict";
    return {
        CustomDomains: function () {
            return $injector.get("OvhApiMeFaxCustomDomains");
        }
    };
});
