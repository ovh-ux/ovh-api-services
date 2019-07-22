angular.module("ovh-api-services").service("OvhApiTelephonyLineAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineAapi");

    var telephonyAll = $resource("/telephony/line", {}, {
        get: {
            method: "GET",
            serviceType: "aapi",
            isArray: true,
            cache: cache
        }
    });

    telephonyAll.resetCache = function () {
        cache.removeAll();
    };

    return telephonyAll;
});
