angular.module("ovh-api-services").service("Auth", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("AuthLexi");
        }
    };
});
