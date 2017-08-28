angular.module("ovh-api-services").service("OvhApiCloudProjectCreditLexi", function ($resource, OvhApiCloudProjectCredit) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiCloudProjectCredit.resetCache();
            return response.data;
        }
    };

    var credit = $resource("/cloud/project/:serviceName/credit/:creditId", {
        serviceName: "@serviceName",
        creditId: "@creditId"
    }, {
        get: { method: "GET", cache: OvhApiCloudProjectCredit.cache.lexi.get },
        query: { method: "GET", cache: OvhApiCloudProjectCredit.cache.lexi.query, isArray: true },
        save: { method: "POST", interceptor: interceptor }
    });

    credit.resetCache = function () {
        OvhApiCloudProjectCredit.cache.lexi.get.removeAll();
    };

    credit.resetQueryCache = function () {
        OvhApiCloudProjectCredit.cache.lexi.query.removeAll();
        OvhApiCloudProjectCredit.cache.aapi.query.removeAll();
    };

    return credit;
});
