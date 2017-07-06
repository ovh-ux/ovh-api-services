angular.module("ovh-api-services").service("NewAccount", function ($injector) {
    "use strict";
    return {
        LegalForm: function () {
            return $injector.get("NewAccountLegalForm");
        },
        CreationRules: function () {
            return $injector.get("NewAccountCreationRules");
        }
    };
});
