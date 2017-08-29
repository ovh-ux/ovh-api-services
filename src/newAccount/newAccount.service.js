angular.module("ovh-api-services").service("OvhApiNewAccount", function ($injector) {
    "use strict";
    return {
        LegalForm: function () {
            return $injector.get("OvhApiNewAccountLegalForm");
        },
        CreationRules: function () {
            return $injector.get("OvhApiNewAccountCreationRules");
        }
    };
});
