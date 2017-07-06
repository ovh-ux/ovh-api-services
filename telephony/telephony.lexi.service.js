"use strict";

angular.module("ovh-api-services").service("TelephonyLexi", function ($resource, $cacheFactory, TelephonyLineAllAapi) {

    var cache = $cacheFactory("TelephonyLexi");
    var schemaCache = $cacheFactory("TelephonyLexiSchema");
    var queryCache = $cacheFactory("TelephonyLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            TelephonyLineAllAapi.resetCache();
            return response.resource;
        }
    };

    var billingAccounts = $resource("/telephony/:billingAccount", {
        billingAccount: "@billingAccount"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        edit: {
            method: "PUT",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        schema: {
            method: "GET",
            url: "/telephony.json",
            cache: schemaCache
        },
        billingAccounts: {
            method: "GET",
            url: "/telephony",
            isArray: true
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
        cancelTermination: {
            method: "POST",
            url: "/telephony/:billingAccount/cancelTermination"
        },
        allowedCreditThreshold: {
            method: "GET",
            url: "/telephony/:billingAccount/allowedCreditThreshold",
            isArray: true,
            cache: cache
        },
        accessories: {
            method: "GET",
            isArray: true,
            url: "/telephony/accessories",
            params: {
                country: "@country"
            },
            cache: cache
        },
        transferSecurityDeposit: {
            method: "POST",
            url: "/telephony/:billingAccount/transferSecurityDeposit"
        },
        getServiceInfos: {
            method: "GET",
            url: "/telephony/:billingAccount/serviceInfos"
        },
        setServiceInfos: {
            method: "PUT",
            url: "/telephony/:billingAccount/serviceInfos"
        },
        changeContact: {
            method: "POST",
            url: "/telephony/:billingAccount/changeContact",
            isArray: true
        },
        availableDefaultSipDomains: {
            method: "GET",
            url: "/telephony/availableDefaultSipDomains",
            isArray: true
        },
        setDefaultSipDomain: {
            method: "POST",
            url: "/telephony/setDefaultSipDomain"
        },
        getAmountSecurityDeposit: {
            method: "GET",
            url: "/telephony/:billingAccount/amountSecurityDeposit",
            isArray: true
        },
        getCurrentOrderIds: {
            method: "GET",
            url: "/telephony/currentOrderIds",
            isArray: true
        },
        canTransferSecurityDeposit: {
            method: "POST",
            url: "/telephony/:billingAccount/canTransferSecurityDeposit",
            isArray: false,
            transformResponse: function (resp, headers, status) {
                var data = resp;
                if (status === 200) {
                    data = {
                        value: data.toLowerCase() === "true"
                    };
                }
                return data;
            }
        },
        getLineOfferPhones: {
            method: "GET",
            url: "/telephony/line/offer/phones",
            isArray: true
        }
    });

    billingAccounts.resetCache = function () {
        cache.removeAll();
    };

    billingAccounts.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return billingAccounts;
});
