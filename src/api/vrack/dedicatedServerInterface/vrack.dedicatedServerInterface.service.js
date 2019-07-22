angular.module("ovh-api-services").service("OvhApiDedicatedServerInterface", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedServerInterfaceV6");
        }
    };
});
