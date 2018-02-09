angular.module("ovh-api-services").service("OvhApiTelephonyLinePhoneLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLinePhoneLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url.replace("/changePhoneConfiguration", ""));
            return response.data;
        }
    };

    var resource = $resource("/telephony/:billingAccount/line/:serviceName/phone", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        edit: {
            method: "PUT",
            interceptor: interceptor
        },
        changePhoneConfiguration: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/phone/changePhoneConfiguration",
            interceptor: interceptor
        },
        getMerchandiseAvailable: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/phone/merchandiseAvailable",
            isArray: true
        },
        reboot: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/phone/reboot"
        },
        resetConfig: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/phone/resetConfig"
        },
        supportsPhonebook: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/phone/supportsPhonebook",
            transformResponse: function (data, headers, status) {
                if (status === 200) {
                    return { data: angular.fromJson(data) };
                }
                return null;
            }
        }
    });


    resource.resetAllCache = function () {
        cache.removeAll();
    };

    return resource;
});
