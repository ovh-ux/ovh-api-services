angular.module("ovh-api-services").service("CloudProjectImage", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectImageLexi");
        }
    };

});
