angular.module("ovh-api-services").service("TelephonyFaxCampaignsLexi", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("TelephonyFaxCampaignsLexi");
    var queryCache = $cacheFactory("TelephonyFaxCampaignsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var campaignsResource = $resource("/telephony/:billingAccount/fax/:serviceName/campaigns/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        create: {
            method: "POST",
            url: "/telephony/:billingAccount/fax/:serviceName/campaigns",
            interceptor: interceptor
        },
        getDetail: {
            method: "GET",
            url: "/telephony/:billingAccount/fax/:serviceName/campaigns/:id/detail",
            cache: cache
        },
        start: {
            method: "POST",
            url: "/telephony/:billingAccount/fax/:serviceName/campaigns/:id/start",
            interceptor: interceptor
        },
        stop: {
            method: "POST",
            url: "/telephony/:billingAccount/fax/:serviceName/campaigns/:id/stop",
            interceptor: interceptor
        }
    });

    campaignsResource.resetCache = function () {
        cache.removeAll();
    };

    campaignsResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return campaignsResource;
});
