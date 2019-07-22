angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterDisasterRecoveryZertoV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedCloudDatacenterDisasterRecoveryZertoV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response.data;
        }
    };

    var baseUrl = "/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zerto";

    var zertoResource = $resource(baseUrl, {
        serviceName: "@serviceName",
        datacenterId: "@datacenterId"
    }, {
        // Method is a POST but acts like a GET
        get: {
            url: baseUrl + "/state",
            method: "POST",
            cache: cache,
            hasBody: false
        },
        disable: {
            url: baseUrl + "/disable",
            method: "POST",
            interceptor: interceptor
        },
        enable: {
            url: baseUrl + "/enable",
            method: "POST",
            interceptor: interceptor
        },
        generateZsspPassword: {
            url: baseUrl + "/generateZsspPassword",
            method: "POST",
            interceptor: interceptor
        }
    });

    zertoResource.resetAllCache = function () {
        zertoResource.resetCache();
    };

    zertoResource.resetCache = function () {
        cache.removeAll();
    };

    return zertoResource;
});
