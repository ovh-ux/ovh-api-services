"use strict";

angular.module("ovh-api-services").service("OvhApiVrackDedicatedCloudDatacenterV6", function ($resource, $cacheFactory, OvhApiVrack) {

    var cache = $cacheFactory("OvhApiVrackDedicatedCloudDatacenterV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            OvhApiVrack.Aapi().resetAllCache();
            return response;
        }
    };

    var vrackDedicatedCloud = $resource("/vrack/:serviceName/dedicatedCloudDatacenter/:datacenter", {
        serviceName: "@serviceName",
        datacenter: "@datacenter"
    }, {
        allowedVrack: {
            method: "GET",
            url: "/vrack/:serviceName/dedicatedCloudDatacenter/:datacenter/allowedVrack",
            cache: cache,
            isArray: true
        },
        move: {
            method: "POST",
            url: "/vrack/:serviceName/dedicatedCloudDatacenter/:datacenter/move",
            interceptor: interceptor
        }
    });

    vrackDedicatedCloud.resetCache = function () {
        cache.removeAll();
        OvhApiVrack.Aapi().resetAllCache();
    };

    return vrackDedicatedCloud;
});
