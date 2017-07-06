"use strict";

angular.module("ovh-api-services").service("TelephonyTrunksLexi", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("TelephonyTrunksLexi");
    var queryCache = $cacheFactory("TelephonyTrunksLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/trunks/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        getServiceInfos: {
            method: "GET",
            url: "/telephony/trunks/:serviceName/serviceInfos",
            cache: cache
        },
        setServiceInfos: {
            method: "PUT",
            url: "/telephony/trunks/:serviceName/serviceInfos",
            interceptor: interceptor
        },
        changeContact: {
            method: "POST",
            url: "/telephony/trunks/:serviceName/changeContact",
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
