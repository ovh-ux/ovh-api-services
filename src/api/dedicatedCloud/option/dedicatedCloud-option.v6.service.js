angular.module("ovh-api-services").service("OvhApiDedicatedCloudOptionV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedCloudOptionV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response.data;
        }
    };

    var baseURL = "/dedicatedCloud/:serviceName/:option";

    var optionResource = $resource(baseURL, {
        serviceName: "@serviceName",
        option: "@option"
    }, {
        get: { method: "GET", cache: cache },
        canBeDisabled: {
            url: baseURL + "/canBeDisabled",
            method: "GET",
            cache: cache
        },
        canBeEnabled: {
            url: baseURL + "/canBeEnabled",
            method: "GET",
            cache: cache
        },
        disable: {
            url: baseURL + "/disable",
            method: "POST",
            interceptor: interceptor
        },
        enable: {
            url: baseURL + "/enable",
            method: "POST",
            interceptor: interceptor
        }
    });

    optionResource.resetCache = function () {
        cache.removeAll();
    };

    return optionResource;
});
