angular.module("ovh-api-services").service("StoreDocument", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("StoreDocumentLexi");
        }
    };
});
