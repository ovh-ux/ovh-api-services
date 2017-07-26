angular.module("ovh-api-services").service("VrackDedicatedConnect", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("VrackDedicatedConnectLexi");
        }
    };
});
