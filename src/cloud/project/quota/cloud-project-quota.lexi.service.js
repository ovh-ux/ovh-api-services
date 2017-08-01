angular.module("ovh-api-services").service("CloudProjectQuotaLexi", function ($resource) {
    "use strict";

    var quota = $resource("/cloud/project/:serviceName/quota", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET"
        },
        query: {
            method: "GET",
            isArray: true,
            transformResponse: function (quotas, headers, status) {
                if (status === 200) {
                    var quotasObj = angular.fromJson(quotas);
                    return _.filter(quotasObj, function (currentQuota) {
                        return !/WAW/.test(currentQuota.region);
                    });
                }
                return quotas;
            }
        }
    });

    return quota;

});
