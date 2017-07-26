"use strict";

angular.module("ovh-api-services").service("VrackDedicatedCloudDatacenterLexi", function ($resource, $cacheFactory, Vrack) {

    var cache = $cacheFactory("VrackDedicatedCloudDatacenterLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            Vrack.Aapi().resetAllCache();
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
        Vrack.Aapi().resetAllCache();
    };

    return vrackDedicatedCloud;
});
