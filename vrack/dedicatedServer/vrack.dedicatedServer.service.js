angular.module("ovh-api-services").service("VrackDedicatedServer", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("VrackDedicatedServerLexi");
        }
    };
});
