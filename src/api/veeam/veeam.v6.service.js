angular.module("ovh-api-services").service("OvhApiVeeamV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiVeeamV6");
    var queryCache = $cacheFactory("OvhApiVeeamV6Query");
    var interceptor = {
        response: function (response) {
            cache.removeAll();
            queryCache.removeAll();
            return response.data;
        }
    };

    var resource = $resource("/veeamCloudConnect/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", isArray: true },
        getDetails: { method: "GET", cache: cache },
        getServiceInfos: {
            url: "/veeamCloudConnect/:serviceName/serviceInfos",
            method: "GET",
            cache: cache
        },
        getInventories: {
            url: "/veeamCloudConnect/:serviceName/backupRepository",
            method: "GET",
            isArray: true,
            cache: cache
        },
        addInventory: {
            url: "/veeamCloudConnect/:serviceName/backupRepository",
            method: "POST",
            interceptor: interceptor
        },
        getOrderableOffers: {
            url: "/veeamCloudConnect/:serviceName/orderableUpgrade",
            isArray: true,
            method: "GET",
            cache: cache
        },
        getOrderUpgradeDurations: { // + param offer
            url: "/order/veeamCloudConnect/:serviceName/upgrade",
            isArray: true,
            method: "GET",
            cache: cache
        },
        getOrderUpgradeDurationsPrices: { // + param offer
            url: "/order/veeamCloudConnect/:serviceName/upgrade/:duration",
            method: "GET",
            cache: cache,
            params: {
                duration: "@duration"
            }
        },
        createUpgradeOrder: { // + post data offer
            url: "/order/veeamCloudConnect/:serviceName/upgrade/:duration",
            method: "POST",
            interceptor: interceptor,
            params: {
                duration: "@duration"
            }
        },
        getInventory: {
            url: "/veeamCloudConnect/:serviceName/backupRepository/:inventoryName",
            method: "GET",
            cache: cache,
            params: {
                inventoryName: "@inventoryName"
            }
        },
        upgradeQuota: { // + post data newQuota
            url: "/veeamCloudConnect/:serviceName/backupRepository/:inventoryName/upgradeQuota",
            method: "POST",
            interceptor: interceptor,
            params: {
                inventoryName: "@inventoryName"
            }
        },
        capabilities: {
            url: "/veeamCloudConnect/:serviceName/capabilities",
            method: "GET",
            cache: cache
        },
        tasks: {
            url: "/veeamCloudConnect/:serviceName/task",
            method: "GET",
            isArray: true
        },
        task: {
            url: "/veeamCloudConnect/:serviceName/task/:taskId",
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
