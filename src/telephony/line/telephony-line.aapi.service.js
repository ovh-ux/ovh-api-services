angular.module("ovh-api-services").service("TelephonyLineAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyLineAapi");

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
