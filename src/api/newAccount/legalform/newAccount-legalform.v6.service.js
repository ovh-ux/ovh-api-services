angular.module("ovh-api-services").service("OvhApiNewAccountLegalFormV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiNewAccountLegalFormV6");
    var queryCache = $cacheFactory("OvhApiNewAccountLegalFormV6Query");

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
