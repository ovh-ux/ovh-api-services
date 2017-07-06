angular.module("ovh-api-services").service("NewAccountCreationRulesLexi", function ($resource, NewAccountCreationRules) {
    "use strict";

    return $resource("/newAccount/creationRules", {
        country: "@country",
        legalform: "@legalform",
        ovhCompany: "@ovhCompany",
        ovhSubsidiary: "@ovhSubsidiary"
    }, {
        get: {
            method: "GET",
            cache: NewAccountCreationRules.cache
        }
    }
    );
});
