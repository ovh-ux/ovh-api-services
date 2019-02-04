angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterZertoSingleV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedCloudDatacenterZertoSingleV6");
    var interceptor = {
        response: function (response) {
            cache.removeAll();
            return response;
        }
    };

    var zertoSingleResource = $resource("/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zertoSingle", {
        serviceName: "@serviceName",
        datacenterId: "@datacenterId"
    }, {
        disable: {
            url: "/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zertoSingle/disable",
            method: "POST",
            interceptor: interceptor
        },
        enable: {
            url: "/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zertoSingle/enable",
            method: "POST",
            interceptor: interceptor
        }
    });

    return zertoSingleResource;
});
