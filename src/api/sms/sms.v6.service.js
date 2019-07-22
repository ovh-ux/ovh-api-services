angular.module("ovh-api-services").service("OvhApiSmsV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsV6");
    var queryCache = $cacheFactory("OvhApiSmsV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var sms = $resource("/sms/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        put: {
            method: "PUT",
            url: "/sms/:serviceName",
            isArray: false,
            interceptor: interceptor
        },
        edit: {
            method: "PUT",
            interceptor: interceptor
        },
        schema: {
            method: "GET",
            url: "/sms.json"
        },
        seeOffers: {
            method: "GET",
            url: "/sms/:serviceName/seeOffers",
            isArray: true,
            cache: cache
        },
        getDocument: {
            method: "GET",
            url: "/sms/:serviceName/document",
            params: {
                wayType: "@wayType"
            },
            transformResponse: function (data, headers, status) {
                if (status === 200) {
                    return { docId: angular.fromJson(data) };
                }
                return data;
            }
        },
        getServiceInfos: {
            method: "GET",
            url: "/sms/:serviceName/serviceInfos",
            cache: cache
        },
        getSendersAvailableForValidation: {
            method: "GET",
            url: "/sms/:serviceName/sendersAvailableForValidation",
            isArray: true,
            cache: cache
        }
    });

    sms.resetCache = function () {
        cache.removeAll();
    };

    sms.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return sms;
});
