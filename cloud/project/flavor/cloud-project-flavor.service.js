angular.module("ovh-api-services").service("CloudProjectFlavor", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectFlavorLexi");
        }
    };

});
