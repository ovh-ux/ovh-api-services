angular.module("ovh-api-services").service("OvhApiDedicatedServerInterface", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedServerInterfaceLexi");
        }
    };
});
