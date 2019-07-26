angular.module("ovh-api-services").service("OvhApiScreenshotAapi", function ($resource, OvhApiScreenshot) {
    "use strict";

    var interceptor = {
        response: function (response) {
            return response.data;
        }
    };

    return $resource("/sws/screenshot", {}, {
        get: {
            method: "GET",
            serviceType: "aapi",
            isArray: false,
            cache: OvhApiScreenshot.cache,
            interceptor: interceptor
        }
    });

});
