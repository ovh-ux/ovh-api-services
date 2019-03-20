angular.module("ovh-api-services").service("OvhApiAdpCapabilities", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiAdpCapabilitiesV6");
        }
    };
});
