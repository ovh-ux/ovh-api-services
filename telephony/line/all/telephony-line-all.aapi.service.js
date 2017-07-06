angular.module("ovh-api-services").service("TelephonyLineAllAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyLineAllAapi");

    var telephonyAll = $resource("/telephony/line/all", {}, {
        query: {
            method: "GET",
            serviceType: "aapi",
            isArray: true,
            cache: cache
        },
        detail: {
            url: "/telephony/line/detail",
            method: "GET",
            serviceType: "aapi",
            isArray: true,
            cache: cache
        },
        byGroup: {
            url: "/telephony/line/group",
            method: "GET",
            serviceType: "aapi",
            isArray: false
        },
        byGroupDetail: {
            url: "/telephony/line/groupDetail",
            method: "GET",
            serviceType: "aapi",
            isArray: true
        }
    });

    telephonyAll.resetCache = function () {
        cache.removeAll();
    };

    return telephonyAll;
});
