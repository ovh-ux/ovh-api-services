angular.module("ovh-api-services").service("SmsVirtualNumbersLexi", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsVirtualNumbersLexi");
    var queryCache = $cacheFactory("SmsVirtualNumbersLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/sms/:serviceName/virtualNumbers/:number", {
        serviceName: "@serviceName",
        number: "@number"
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
        queryVirtualNumbers: {
            method: "GET",
            url: "/sms/virtualNumbers",
            isArray: true,
            cache: cache
        },
        getVirtualNumbers: {
            method: "GET",
            url: "/sms/virtualNumbers/:number",
            params: {
                number: "@number"
            },
            cache: cache
        },
        getVirtualNumbersServiceInfos: {
            method: "GET",
            url: "/sms/virtualNumbers/:number/serviceInfos",
            params: {
                number: "@number"
            },
            cache: cache
        },
        updateVirtualNumbersServiceInfos: {
            method: "PUT",
            url: "/sms/virtualNumbers/:number/serviceInfos",
            params: {
                number: "@number"
            },
            interceptor: interceptor
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    res.resetQueryCache = function () {
        queryCache.removeAll();
    };

    res.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return res;
});
