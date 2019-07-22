angular.module("ovh-api-services").service("OvhApiTelephonyLineAllAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineAllAapi");

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
