angular.module("ovh-api-services")
    .service("OvhApiMeOvhAccountV6", function ($resource, $cacheFactory, OvhApiMev6) {
        "use strict";

        var cache = $cacheFactory("OvhApiMeOvhAccountV6");
        var queryCache = $cacheFactory("OvhApiMeOvhAccountV6Query");

        var resource = $resource("/me/ovhAccount/:ovhAccountId", {
            ovhAccountId: "@ovhAccountId"
        }, {
            get: { method: "GET", cache: cache },
            query: { method: "GET", cache: queryCache, isArray: true }
        });

        resource.getBalance = function () {
            return OvhApiMev6.get().$promise
                .then(function (userInfo) {
                    return resource.get({ ovhAccountId: userInfo.ovhSubsidiary }).$promise;
                })
                .then(function (accountInfo) {
                    return accountInfo.balance;
                });
        };

        resource.resetCache = function () {
            cache.removeAll();
        };

        resource.resetQueryCache = function () {
            queryCache.removeAll();
        };

        return resource;
    });
