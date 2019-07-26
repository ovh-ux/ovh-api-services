angular.module("ovh-api-services").service("OvhApiStore", function ($injector) {
    "use strict";

    return {
        Contact: function () {
            return $injector.get("OvhApiStoreContact");
        },
        Document: function () {
            return $injector.get("OvhApiStoreDocument");
        },
        Partner: function () {
            return $injector.get("OvhApiStorePartner");
        }
    };
});
