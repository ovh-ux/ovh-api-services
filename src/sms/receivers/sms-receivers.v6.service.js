angular.module("ovh-api-services").service("OvhApiSmsReceiversV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsReceiversV6");
    var queryCache = $cacheFactory("OvhApiSmsReceiversV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var receiversResource = $resource("/sms/:serviceName/receivers/:slotId", {
        serviceName: "@serviceName",
        slotId: "@slotId"
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
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        create: {
            method: "POST",
            url: "/sms/:serviceName/receivers",
            interceptor: interceptor
        },
        getCsv: {
            method: "GET",
            url: "/sms/:serviceName/receivers/:slotId/csv",
            cache: cache,
            transformResponse: function (data, headers, status) {
                if (status === 200) {
                    return { data: data };
                }
                return data;
            }
        },
        clean: {
            method: "POST",
            url: "/sms/:serviceName/receivers/:slotId/clean",
            interceptor: interceptor
        },
        edit: {
            method: "PUT",
            interceptor: interceptor
        }
    });

    receiversResource.resetCache = function () {
        cache.removeAll();
    };

    receiversResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    receiversResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return receiversResource;
});
