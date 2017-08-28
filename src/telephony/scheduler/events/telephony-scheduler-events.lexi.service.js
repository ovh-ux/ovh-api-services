angular.module("ovh-api-services").service("OvhApiTelephonySchedulerEventsLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonySchedulerEventsLexi");
    var queryCache = $cacheFactory("OvhApiTelephonySchedulerEventsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var schedulerEventsResource = $resource("/telephony/:billingAccount/scheduler/:serviceName/events/:uid", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        uid: "@uid"
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
        create: {
            url: "/telephony/:billingAccount/scheduler/:serviceName/events",
            params: {
                billingAccount: "@billingAccount",
                serviceName: "@serviceName"
            },
            method: "POST",
            interceptor: interceptor
        },
        save: {
            method: "PUT",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    schedulerEventsResource.resetCache = function () {
        cache.removeAll();
    };

    schedulerEventsResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    schedulerEventsResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return schedulerEventsResource;

});
