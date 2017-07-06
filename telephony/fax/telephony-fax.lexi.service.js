angular.module("ovh-api-services").service("TelephonyFaxLexi", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("TelephonyFaxLexi");
    var queryCache = $cacheFactory("TelephonyFaxLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var faxResource = $resource("/telephony/:billingAccount/fax/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        getBatch: {
            method: "GET",
            isArray: true,
            cache: queryCache,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        edit: {
            method: "PUT",
            interceptor: interceptor
        },
        getSettings: {
            method: "GET",
            url: "/telephony/:billingAccount/fax/:serviceName/settings",
            cache: cache
        },
        setSettings: {
            method: "PUT",
            url: "/telephony/:billingAccount/fax/:serviceName/settings",
            interceptor: interceptor
        },
        changePassword: {
            method: "POST",
            url: "/telephony/:billingAccount/fax/:serviceName/settings/changePassword",
            interceptor: interceptor
        },
        sendFax: {
            method: "POST",
            url: "/telephony/:billingAccount/fax/:serviceName/settings/sendFax",
            interceptor: interceptor
        }
    });

    faxResource.resetCache = function () {
        cache.removeAll();
    };

    faxResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return faxResource;
});
