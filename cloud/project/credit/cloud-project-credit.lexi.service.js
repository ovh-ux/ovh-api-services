angular.module("ovh-api-services").service("CloudProjectCreditLexi", function ($resource, CloudProjectCredit) {
    "use strict";

    var interceptor = {
        response: function (response) {
            CloudProjectCredit.resetCache();
            return response.data;
        }
    };

    var credit = $resource("/cloud/project/:serviceName/credit/:creditId", {
        serviceName: "@serviceName",
        creditId: "@creditId"
    }, {
        get: { method: "GET", cache: CloudProjectCredit.cache.lexi.get },
        query: { method: "GET", cache: CloudProjectCredit.cache.lexi.query, isArray: true },
        save: { method: "POST", interceptor: interceptor }
    });

    credit.resetCache = function () {
        CloudProjectCredit.cache.lexi.get.removeAll();
    };

    credit.resetQueryCache = function () {
        CloudProjectCredit.cache.lexi.query.removeAll();
        CloudProjectCredit.cache.aapi.query.removeAll();
    };

    return credit;
});
