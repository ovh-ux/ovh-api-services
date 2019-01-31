angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterZertoV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedCloudDatacenterZertoV6");
    var interceptor = {
        response: function (response) {
            cache.removeAll();
            return response;
        }
    };

    var zertoResource = $resource("/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zerto", {
        serviceName: "@serviceName",
        datacenterId: "@datacenterId"
    }, {
        disable: {
            url: "/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zerto/disable",
            method: "POST",
            interceptor: interceptor
        },
        enable: {
            url: "/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zerto/enable",
            method: "POST",
            interceptor: interceptor
        },
        generateZsspPassword: {
            url: "/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zerto/generateZsspPassword",
            method: "POST",
            interceptor: interceptor
        },
        state: {
            url: "/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zerto/state",
            method: "POST",
            interceptor: interceptor
        }
    });

    return zertoResource;
});
