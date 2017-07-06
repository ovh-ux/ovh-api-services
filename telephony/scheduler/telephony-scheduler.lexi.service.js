angular.module("ovh-api-services").service("TelephonySchedulerLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonySchedulerLexi");
    var queryCache = $cacheFactory("TelephonySchedulerLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var schedulerResource = $resource("/telephony/:billingAccount/scheduler/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            isArray: false,
            cache: cache
        },
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: queryCache
        },
        save: {
            method: "PUT",
            interceptor: interceptor
        },
        importIcsCalendar: {
            method: "POST",
            url: "/telephony/:billingAccount/scheduler/:serviceName/importIcsCalendar",
            interceptor: interceptor
        }
    });

    schedulerResource.resetCache = function () {
        cache.removeAll();
    };

    schedulerResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    schedulerResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return schedulerResource;

});
