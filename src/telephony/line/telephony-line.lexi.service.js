angular.module("ovh-api-services").service("OvhApiTelephonyLineLexi", function ($cacheFactory, $resource, $q, $http) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyLineLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var lineResource = $resource("/telephony/:billingAccount/line/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            cache: queryCache,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        terminate: {
            method: "DELETE",
            url: "/telephony/:billingAccount/service/:serviceName",
            params: {
                reason: "@reason",
                details: "@details"
            },
            isArray: false
        },
        cancelTermination: {
            method: "POST"
        },
        edit: {
            method: "PUT",
            interceptor: interceptor
        },
        getOptions: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/options",
            cache: cache
        },
        setOptions: {
            method: "PUT",
            url: "/telephony/:billingAccount/line/:serviceName/options",
            interceptor: interceptor
        },
        changePassword: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/changePassword",
            interceptor: interceptor
        },
        canChangePassword: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/canChangePassword",
            isArray: false,
            transformResponse: $http.defaults.transformResponse.concat(function (raw, headers, status) {
                var result = {};
                if (status === 403) {
                    result.value = false;
                    result.message = raw.message;
                } else {
                    result.value = raw;
                }
                return result;
            }),
            interceptor: {
                responseError: function (rejection) {
                    if (rejection.status === 403) {
                        return rejection.data;
                    }
                    return $q.reject(rejection);
                }
            }
        },
        convertToNumber: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/convertToNumber",
            preventLogout: true
        },
        cancelConvertToNumber: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/cancelConvertToNumber",
            preventLogout: true
        },
        offer: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/offer",
            isArray: false,
            cache: cache
        },
        getTones: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/tones"
        },
        changeTones: {
            method: "PUT",
            url: "/telephony/:billingAccount/line/:serviceName/tones",
            interceptor: interceptor
        },
        toneUpload: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/tones/toneUpload"
        },
        ips: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/ips",
            isArray: true,
            cache: cache
        },
        sipDomains: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/availableSipDomains",
            isArray: true,
            cache: cache
        },
        lastRegistrations: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/lastRegistrations",
            isArray: true,
            cache: cache
        },
        phoneCanBeAssociable: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/phoneCanBeAssociable",
            isArray: true
        },
        listAssociablePhones: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/listAssociablePhones",
            isArray: true
        },
        associateDevice: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/associateDevice"
        },
        maximumAvailableSimultaneousLines: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/maximumAvailableSimultaneousLines",
            isArray: false,
            transformResponse: function (data, headers, status) {
                if (status === 200) {
                    return { maximum: angular.fromJson(data) };
                }
                return data;
            }
        },
        removeSimultaneousLine: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/removeSimultaneousLines",
            isArray: false
        },
        simultaneousChannelsDetails: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/simultaneousChannelsDetails",
            isArray: false
        }
    });

    lineResource.resetCache = function () {
        cache.removeAll();
    };

    lineResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    lineResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return lineResource;
});
