angular.module("ovh-api-services").service("OvhApiUserDocument", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiUserDocumentLexi");
        }
    };
});

