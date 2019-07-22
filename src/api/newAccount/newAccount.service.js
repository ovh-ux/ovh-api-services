angular.module("ovh-api-services").service("OvhApiNewAccount", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiNewAccountV6");
        },
        LegalForm: function () {
            return $injector.get("OvhApiNewAccountLegalForm");
        },
        CreationRules: function () {
            return $injector.get("OvhApiNewAccountCreationRules");
        }
    };
});
