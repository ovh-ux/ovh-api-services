angular.module("ovh-api-services").service("OvhApiNewAccountLegalFormLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiNewAccountLegalFormLexi");
    var queryCache = $cacheFactory("OvhApiNewAccountLegalFormLexiQuery");

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
