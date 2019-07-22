angular.module("ovh-api-services").service("OvhApiStoreDocument", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiStoreDocumentV6");
        }
    };
});
