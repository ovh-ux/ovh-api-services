angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterZertoSingleV6", function ($resource) {
    "use strict";

    var zertoSingleResource = $resource("/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zertoSingle", {
        serviceName: "@serviceName",
        datacenterId: "@datacenterId"
    }, {
        disable: {
            url: "/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zertoSingle/disable",
            method: "POST"
        },
        enable: {
            url: "/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zertoSingle/enable",
            method: "POST"
        },
        configureVpn: {
            url: "/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zertoSingle/configureVpn",
            method: "POST"
        },
        getDefaultLocalVraNetwork: {
            url: "/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zertoSingle/defaultLocalVraNetwork",
            method: "GET",
            transformResponse: function (resp, headers, status) {
                var data = resp;

                if (status === 200) {
                    data = {
                        value: angular.fromJson(data)
                    };
                }
                return data;
            }
        }
    });

    return zertoSingleResource;
});
