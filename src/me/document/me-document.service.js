angular.module("ovh-api-services").service("OvhApiMeDocument", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMeDocumentLexi");
        }
    };
});
