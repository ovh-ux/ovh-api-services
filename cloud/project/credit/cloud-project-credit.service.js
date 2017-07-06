angular.module("ovh-api-services").service("CloudProjectCredit", function ($injector, $cacheFactory) {

    "use strict";

    var cache = {
        lexi: {
            query: $cacheFactory("CloudProjectCreditLexiQuery"),
            get: $cacheFactory("CloudProjectCreditLexi")
        },
        aapi: {
            query: $cacheFactory("CloudProjectCreditAapiQuery")
        }
    };

    return {
        Lexi: function () {
            return $injector.get("CloudProjectCreditLexi");
        },
        Aapi: function () {
            return $injector.get("CloudProjectCreditAapi");
        },
        resetCache: function () {
            cache.lexi.query.removeAll();
            cache.lexi.get.removeAll();
            cache.aapi.query.removeAll();
        },
        cache: cache
    };

});
