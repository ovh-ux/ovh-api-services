angular.module("ovh-api-services").service("OvhApiNewAccountCreationRulesLexi", function ($resource, OvhApiNewAccountCreationRules) {
    "use strict";

    return $resource("/newAccount/creationRules", {
        country: "@country",
        legalform: "@legalform",
        ovhCompany: "@ovhCompany",
        ovhSubsidiary: "@ovhSubsidiary"
    }, {
        get: {
            method: "GET",
            cache: OvhApiNewAccountCreationRules.cache
        }
    }
    );
});
