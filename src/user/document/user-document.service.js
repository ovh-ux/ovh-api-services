angular.module("ovh-api-services").service("UserDocument", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserDocumentLexi");
        }
    };
});

