angular.module("ovh-api-services").service("OvhApiCloudProjectCredit", function ($injector, $cacheFactory) {

    "use strict";

    var cache = {
        v6: {
            query: $cacheFactory("OvhApiCloudProjectCreditV6Query"),
            get: $cacheFactory("OvhApiCloudProjectCreditV6")
        },
        aapi: {
            query: $cacheFactory("OvhApiCloudProjectCreditAapiQuery")
        }
    };

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectCreditV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiCloudProjectCreditAapi");
        },
        resetCache: function () {
            cache.v6.query.removeAll();
            cache.v6.get.removeAll();
            cache.aapi.query.removeAll();
        },
        cache: cache
    };

});
