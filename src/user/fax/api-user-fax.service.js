angular.module("ovh-api-services").service("OvhApiUserFax", function ($injector) {
    "use strict";
    return {
        CustomDomains: function () {
            return $injector.get("OvhApiUserFaxCustomDomains");
        }
    };
});
