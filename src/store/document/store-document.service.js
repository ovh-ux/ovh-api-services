angular.module("ovh-api-services").service("OvhApiStoreDocument", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiStoreDocumentLexi");
        }
    };
});
