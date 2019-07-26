import trim from 'lodash/trim';

angular.module("ovh-api-services").service("OvhApiPackXdslEmailProV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslEmailProV6");
    var queryCache = $cacheFactory("OvhApiPackXdslEmailProV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var emailPro = $resource("/pack/xdsl/:packName/emailPro/services", {
        packName: "@packName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        save: {
            method: "POST",
            interceptor: interceptor
        },
        getDomains: {
            method: "GET",
            url: "/pack/xdsl/:packName/emailPro/options/domains",
            isArray: true,
            cache: cache
        },
        isEmailAvailable: {
            method: "GET",
            url: "/pack/xdsl/:packName/emailPro/options/isEmailAvailable",
            transformResponse: function (data, headersGetter, status) {
                if (status !== 200) {
                    return data;
                }
                return { available: trim(data).toUpperCase() === "TRUE" };
            }
        }
    });

    emailPro.resetCache = function () {
        cache.removeAll();
    };

    emailPro.resetQueryCache = function () {
        queryCache.removeAll();
    };

    emailPro.resetAllCache = function () {
        emailPro.resetCache();
        emailPro.resetQueryCache();
    };

    return emailPro;
});
