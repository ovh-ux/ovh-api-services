angular.module("ovh-api-services").service("NewAccountLegalFormLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("NewAccountLegalFormLexi");
    var queryCache = $cacheFactory("NewAccountLegalFormLexiQuery");

    var newAccount = $resource("/newAccount/legalform", {
        country: "@country"
    }, {
        get: { method: "GET", cache: cache, isArray: true }
    }
    );

    newAccount.resetCache = function () {
        cache.removeAll();
    };

    newAccount.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return newAccount;
});
