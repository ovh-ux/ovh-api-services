angular.module("ovh-api-services").service("VrackCloudProject", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("VrackCloudProjectLexi");
        }
    };
});
