angular.module("ovh-api-services").service("OvhApiDomainOptions", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDomainOptionsV6");
        }
    };
});
