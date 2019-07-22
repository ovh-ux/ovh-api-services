angular.module("ovh-api-services").service("OvhApiOrderCdn", function ($injector) {
    "use strict";
    return {
        Dedicated: function () {
            return $injector.get("OvhApiOrderCdnDedicated");
        }
    };
});
