angular.module("ovh-api-services").service("UserFax", function ($injector) {
    "use strict";
    return {
        CustomDomains: function () {
            return $injector.get("UserFaxCustomDomains");
        }
    };
});
