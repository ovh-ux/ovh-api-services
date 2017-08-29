angular.module("ovh-api-services").service("OvhApiDomain", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiDomainLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiDomainErika");
        }
    };
});
