angular.module("ovh-api-services")
    .service("OvhApiMeOvhAccountLexi", function ($resource, $cacheFactory, OvhApiMeLexi) {
        "use strict";

        var cache = $cacheFactory("OvhApiMeOvhAccountLexi");
        var queryCache = $cacheFactory("OvhApiMeOvhAccountLexiQuery");

        var resource = $resource("/me/ovhAccount/:ovhAccountId", {
            ovhAccountId: "@ovhAccountId"
        }, {
            get: { method: "GET", cache: cache },
            query: { method: "GET", cache: queryCache, isArray: true }
        });

        resource.getBalance = function () {
            return OvhApiMeLexi.get().$promise
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
