angular.module("ovh-api-services").service("Store", function ($injector) {
    "use strict";

    return {
        Contact: function () {
            return $injector.get("StoreContact");
        },
        Document: function () {
            return $injector.get("StoreDocument");
        },
        Partner: function () {
            return $injector.get("StorePartner");
        }
    };
});
