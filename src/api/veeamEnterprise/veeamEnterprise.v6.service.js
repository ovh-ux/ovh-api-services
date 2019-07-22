angular.module("ovh-api-services").service("OvhApiVeeamEnterpriseV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiVeeamEnterpriseV6");
    var queryCache = $cacheFactory("OvhApiVeeamEnterpriseV6Query");
    var interceptor = {
        response: function (response) {
            cache.removeAll();
            queryCache.removeAll();
            return response.data;
        }
    };

    var resource = $resource("/veeam/veeamEnterprise/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        getServiceInfos: {
            url: "/veeam/veeamEnterprise/:serviceName/serviceInfos",
            method: "GET",
            cache: cache
        },
        register: {
            url: "/veeam/veeamEnterprise/:serviceName/register",
            method: "POST",
            interceptor: interceptor
        },
        update: {
            url: "/veeam/veeamEnterprise/:serviceName/update",
            method: "POST",
            interceptor: interceptor
        },
        terminate: {
            url: "/veeam/veeamEnterprise/:serviceName/terminate",
            method: "POST",
            interceptor: interceptor
        },
        confirmTermination: {
            url: "/veeam/veeamEnterprise/:serviceName/confirmTermination",
            method: "POST",
            interceptor: interceptor
        },
        tasks: {
            url: "/veeam/veeamEnterprise/:serviceName/task",
            method: "GET",
            isArray: true
        },
        task: {
            url: "/veeam/veeamEnterprise/:serviceName/task/:taskId",
            method: "GET",
            params: {
                taskId: "@taskId"
            }
        }
    });

    resource.resetCache = function () {
        cache.removeAll();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
});
