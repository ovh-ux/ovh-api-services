angular.module("ovh-api-services").service("Support", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SupportLexi");
        }
    };
});
