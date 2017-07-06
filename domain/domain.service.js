angular.module("ovh-api-services").service("Domain", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("DomainLexi");
        },
        Erika: function () {
            return $injector.get("DomainErika");
        }
    };
});
