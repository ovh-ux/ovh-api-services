angular.module("ovh-api-services").service("OvhApiCloudProjectCredit", function ($injector, $cacheFactory) {

    "use strict";

    var cache = {
        lexi: {
            query: $cacheFactory("OvhApiCloudProjectCreditLexiQuery"),
            get: $cacheFactory("OvhApiCloudProjectCreditLexi")
        },
        aapi: {
            query: $cacheFactory("OvhApiCloudProjectCreditAapiQuery")
        }
    };

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectCreditLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiCloudProjectCreditAapi");
        },
        resetCache: function () {
            cache.lexi.query.removeAll();
            cache.lexi.get.removeAll();
            cache.aapi.query.removeAll();
        },
        cache: cache
    };

});
